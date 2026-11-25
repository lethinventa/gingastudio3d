import { productsFallback } from './products-fallback';

export interface ProductVariant {
  label: string;
  quantity: number;
  price: string;
}

export interface Product {
  name: string;
  price: string;
  category: string;
  image?: string;
  images?: string[];
  description?: string;
  specs?: Record<string, string>;
  variants?: ProductVariant[];
}

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ── Produtos vindos do Almanac ───────────────────────────────
// O cadastro dos produtos fica no Almanac (sistema de gestão). Na hora da publicação
// (astro build) o site chama a função pública `produtos_site` do Supabase, que entrega
// só os produtos marcados "Publicar no site" e só os campos do site. Quando um produto
// é salvo no Almanac, ele dispara um Deploy Hook da Vercel e o site é publicado de novo.

interface ProdutoAlmanac {
  id: string;
  nome: string;
  foto: string | null;
  site: {
    categoria: string;
    descricao: string;
    especificacoes: { rotulo: string; valor: string }[];
    fotos: string[];
    faixas: { quantidade: number; preco: number }[];
  };
}

// Fotos enviadas pelo Almanac chegam como data URL; viram arquivos em /fotos/
// (ver src/pages/fotos/[arquivo].ts). Caminhos como "/foto.png" já estão em public/.
export const generatedPhotos = new Map<string, { type: string; bytes: Uint8Array }>();

function photoUrl(foto: string, slug: string, index: number): string | null {
  const match = foto.match(/^data:(image\/([a-z+]+));base64,(.+)$/);
  if (!match) return foto.startsWith('/') || foto.startsWith('https://') ? foto : null;
  const [, type, subtype, base64] = match;
  const ext = subtype === 'jpeg' ? 'jpg' : subtype.replace('+xml', '');
  const file = `${slug}-${index + 1}.${ext}`;
  generatedPhotos.set(file, { type, bytes: Uint8Array.from(Buffer.from(base64, 'base64')) });
  return `/fotos/${file}`;
}

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/ /g, ' ');
}

function toProduct(p: ProdutoAlmanac): Product | null {
  const faixas = [...(p.site.faixas ?? [])]
    .filter((f) => f.quantidade > 0 && f.preco > 0)
    .sort((a, b) => a.quantidade - b.quantidade);
  if (faixas.length === 0) return null;

  const slug = slugify(p.nome);
  const fontes = p.site.fotos?.length ? p.site.fotos : p.foto ? [p.foto] : [];
  const images = fontes.map((f, i) => photoUrl(f, slug, i)).filter((f): f is string => Boolean(f));
  const variants = faixas.map((f) => ({
    label: `${f.quantidade} ${f.quantidade === 1 ? 'unidade' : 'unidades'}`,
    quantity: f.quantidade,
    price: formatPrice(f.preco),
  }));
  const specs = Object.fromEntries(
    (p.site.especificacoes ?? []).filter((e) => e.rotulo && e.valor).map((e) => [e.rotulo, e.valor])
  );

  return {
    name: p.nome,
    price: variants[0].price,
    category: p.site.categoria,
    image: images[0],
    images: images.length > 1 ? images : undefined,
    description: p.site.descricao || undefined,
    specs: Object.keys(specs).length ? specs : undefined,
    variants,
  };
}

async function loadProducts(): Promise<Product[]> {
  const url = import.meta.env.SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key = import.meta.env.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Na Vercel isso é erro de configuração: melhor falhar a publicação (o site no ar
    // continua o anterior) do que publicar uma lista desatualizada.
    if (process.env.VERCEL) throw new Error('Defina SUPABASE_URL e SUPABASE_ANON_KEY na Vercel.');
    console.warn('[products] SUPABASE_URL/SUPABASE_ANON_KEY ausentes: usando a lista local de exemplo.');
    return productsFallback;
  }

  const res = await fetch(`${url}/rest/v1/rpc/produtos_site`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: '{}',
  });
  if (!res.ok) throw new Error(`Falha ao buscar produtos no Supabase: ${res.status} ${await res.text()}`);

  const rows = (await res.json()) as ProdutoAlmanac[];
  const list = rows.map(toProduct).filter((p): p is Product => p !== null);
  // Proteção: uma lista vazia quase sempre é erro (função errada, produtos ainda não
  // importados). Falhar mantém no ar a última versão do site.
  if (list.length === 0) throw new Error('Nenhum produto publicado no Almanac: mantendo o site anterior.');
  return list;
}

export const products: Product[] = await loadProducts();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => slugify(p.name) === slug);
}
