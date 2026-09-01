export interface ProductBadge {
  label: string;
  icon: string;
}

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
  badges?: ProductBadge[];
  variants?: ProductVariant[];
}

const badgeIcons = {
  material: 'M12 3c-4 3-7 7-7 11a7 7 0 0014 0c0-4-3-8-7-11z M5 14c3 1 6 1 9-2',
  location:
    'M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  shipping:
    'M3 7h11v8H3z M14 10h4l3 3v2h-7z M6.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  madeToOrder: 'M12 3l2.4 5.5L20 9l-4.4 3.8L17 19l-5-3.3L7 19l1.4-6.2L4 9l5.6-.5z',
  print3d: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z M4 7.5l8 4.5 8-4.5 M12 12v9',
  packaging: 'M12 3l8 3.5v7c0 4.5-3.4 7.5-8 8.5-4.6-1-8-4-8-8.5v-7z',
} as const;

function defaultBadges(material: string): ProductBadge[] {
  return [
    { label: material, icon: badgeIcons.material },
    { label: 'Produzido em Natal/RN', icon: badgeIcons.location },
    { label: 'Envio em até 3 dias úteis', icon: badgeIcons.shipping },
    { label: 'Feito sob encomenda', icon: badgeIcons.madeToOrder },
    { label: 'Impressão 3D própria', icon: badgeIcons.print3d },
    { label: 'Embalagem segura e sustentável', icon: badgeIcons.packaging },
  ];
}

export const products: Product[] = [
  {
    name: 'Porta Anel Simples',
    price: 'R$ 140,00',
    category: 'Chaveiro',
    image: '/porta-anel-simples.png',
    description: 'Porta-anel para academia: potinho com tampa rosqueável que prende no chaveiro, ideal pra guardar aliança, anéis ou brincos com segurança durante o treino. Ideal pra revenda em academias e lojas de artigos esportivos.',
    specs: {
      'Materiais': 'PLA',
    },
    badges: defaultBadges('PLA'),
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
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 106,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 245,00' },
    ],
  },
  {
    name: 'Porta Anel Premium',
    price: 'R$ 195,00',
    category: 'Chaveiro',
    image: '/chaveiro-portal-anel-premium.png',
    description: 'Porta-anel premium para academia: potinho com tampa rosqueável e acabamento reforçado, prende no chaveiro pra guardar aliança/anéis em segurança durante o treino. Pronto pra gravação a laser ou adesivo personalizado.',
    specs: {
      'Materiais': 'PLA',
    },
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 195,00' },
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
    badges: defaultBadges('PLA'),
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
    description: 'Suporte de celular personalizável em PLA, pronto pra gravação a laser ou adesivo com nome/design do cliente. Ideal pra revenda ou brindes corporativos.',
    specs: {
      'Materiais': 'PLA',
    },
    badges: defaultBadges('PLA'),
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
    badges: defaultBadges('PLA'),
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
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 91,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 210,00' },
    ],
  },
  {
    name: 'Chaveiro Logo Vazado',
    price: 'R$ 99,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Chaveiro vazado com o contorno do seu logo, em PLA. Peça leve e resistente, pronta pra brinde corporativo em volume.',
    specs: {
      'Materiais': 'PLA',
    },
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 99,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 228,00' },
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
    badges: defaultBadges('PLA'),
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
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 140,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 320,00' },
      { label: '50 unidades', quantity: 50, price: 'R$ 595,00' },
    ],
  },
  {
    name: 'Organizador de Cabos Logo',
    price: 'R$ 100,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Organizador de cabos com espaço pra logo gravado — prende cabos de carregador/USB na mesa e evita bagunça. Brinde corporativo funcional.',
    specs: {
      'Materiais': 'PLA',
    },
    badges: defaultBadges('PLA'),
    variants: [
      { label: '10 unidades', quantity: 10, price: 'R$ 100,00' },
      { label: '25 unidades', quantity: 25, price: 'R$ 230,00' },
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
