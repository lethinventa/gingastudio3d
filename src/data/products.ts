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

export const products: Product[] = [
  {
    name: 'Porta Anel Simples',
    price: 'R$ 140,00',
    category: 'Chaveiro',
    image: '/porta-anel-simples.png',
    description: 'Porta-anel para academia: potinho com tampa de click que prende no chaveiro, ideal pra guardar aliança, anéis ou brincos com segurança durante o treino. Ideal pra revenda em academias e lojas de artigos esportivos.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 140,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 320,00' },
      { label: '50 unidades', quantity: 50, price: 'R$ 595,00' },
    ],
  },
  {
    name: 'Abridor de Latas Boca',
    price: 'R$ 106,00',
    category: 'Abridor lata',
    image: '/chaveiro-boca.png',
    images: ['/chaveiro-boca.png', '/chaveiro-boca-2.png'],
    description: 'Abridor de latas em PLA com boca ergonômica, resistente e fácil de usar no dia a dia. Ideal pra revenda em utilidades domésticas.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 106,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 245,00' },
    ],
  },
  {
    name: 'Porta Anel Premium',
    price: 'R$ 165,00',
    category: 'Chaveiro',
    image: '/chaveiro-portal-anel-premium.png',
    description: 'Porta-anel premium para academia: potinho com tampa rosqueável e forração interna em feltro pra não arranhar a joia, prende no chaveiro pra guardar aliança/anéis em segurança durante o treino. Personalização impressa em 3D direto na peça ou com adesivo vinílico.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 165,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 450,00' },
    ],
  },
  {
    name: 'Ponteira Lápis',
    price: 'R$ 28,00',
    category: 'Utilidades',
    image: '/ponteira-lapis.jpg',
    description: 'Ponteira de lápis em PLA, prática pra personalizar kits escolares ou brindes de papelaria.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 28,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 64,00' },
    ],
  },
  {
    name: 'Suporte Celular Personalizado',
    price: 'R$ 173,00',
    category: 'Utilidades',
    image: '/suporte-celular.png',
    description: 'Suporte de celular personalizável em PLA, com personalização impressa em 3D direto na peça ou adesivo com nome/design do cliente. Ideal pra revenda ou brindes corporativos.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 173,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 400,00' },
    ],
  },
  {
    name: 'Porta Anel Kettlebell',
    price: 'R$ 147,00',
    category: 'Chaveiro',
    image: '/porta-anel-kettlebell.png',
    description: 'Porta-anel formato kettlebell pra academia: potinho com tampa rosqueável que prende no chaveiro, guarda aliança/anéis com segurança durante o treino.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 147,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 340,00' },
    ],
  },
  {
    name: 'Suporte Foto Flor',
    price: 'R$ 91,00',
    category: 'Utilidades',
    image: '/suporte-foto-flor.png',
    description: 'Suporte de foto em formato de flor, em PLA — decora mesa ou escritório e segura fotos pequenas/polaroid. Ideal pra revenda em papelarias e lojas de decoração.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 91,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 210,00' },
    ],
  },
  {
    name: 'Chaveiro Capacete',
    price: 'R$ 112,00',
    category: 'Chaveiro',
    image: '/chaveiro-capacete.png',
    description: 'Chaveiro em formato de capacete, ideal pra quem é apaixonado por moto ou ciclismo. Leve, resistente e fácil de personalizar com cores.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 112,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 256,00' },
      { label: '50 unidades', quantity: 50, price: 'R$ 476,00' },
    ],
  },
  {
    name: 'Porta Batom Ondas',
    price: 'R$ 140,00',
    category: 'Chaveiro',
    image: '/porta-batom-onda.png',
    images: ['/porta-batom-onda.png', '/porta-batom-onda2.png'],
    description: 'Porta batom com textura em ondas, prático pra levar batom ou protetor labial na bolsa sem sujar tudo.',
    specs: {
      'Materiais': 'PLA',
    },
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 140,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 320,00' },
      { label: '50 unidades', quantity: 50, price: 'R$ 595,00' },
    ],
  },
];

export const featuredProducts = products.slice(0, 4);

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => slugify(p.name) === slug);
}
