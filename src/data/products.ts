export interface ProductBadge {
  label: string;
  icon: string;
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
    name: 'Porta Anel Simples - 10 UND',
    price: 'R$ 140,00',
    category: 'Chaveiro',
    image: '/produto-sem-imagem.svg',
    description: 'Porta-anel para academia: potinho com tampa rosqueável que prende no chaveiro, ideal pra guardar aliança, anéis ou brincos com segurança durante o treino. Lote de 10 unidades, ideal pra revenda em academias e lojas de artigos esportivos.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Abridor de Latas Boca - 10 UND',
    price: 'R$ 106,00',
    category: 'Abridor lata',
    image: '/chaveiro-boca.png',
    images: ['/chaveiro-boca.png', '/chaveiro-boca-2.png'],
    description: 'Abridor de latas em PLA com boca ergonômica, resistente e fácil de usar no dia a dia. Lote de 10 unidades, ideal pra revenda em utilidades domésticas.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Abridor de Latas Boca - 25 UND',
    price: 'R$ 245,00',
    category: 'Abridor lata',
    image: '/chaveiro-boca.png',
    images: ['/chaveiro-boca.png', '/chaveiro-boca-2.png'],
    description: 'Lote de 25 abridores de latas boca em PLA, com preço reduzido por volume. Indicado pra lojistas e produção recorrente.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Anel Premium - 10 UND',
    price: 'R$ 195,00',
    category: 'Chaveiro',
    image: '/chaveiro-portal-anel-premium.png',
    description: 'Porta-anel premium para academia: potinho com tampa rosqueável e acabamento reforçado, prende no chaveiro pra guardar aliança/anéis em segurança durante o treino. Kit com 10 unidades, pronto pra gravação a laser ou adesivo personalizado.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Anel Premium - 25 UND',
    price: 'R$ 450,00',
    category: 'Chaveiro',
    image: '/chaveiro-portal-anel-premium.png',
    description: 'Lote fechado de 25 porta-anéis premium pra academia — potinho com tampa rosqueável que prende no chaveiro, guarda aliança/anéis durante o treino. Opção certa pra quem revende em academias ou personaliza em escala.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Ponteira Lápis - 10 UND',
    price: 'R$ 28,00',
    category: 'Utilidades',
    image: '/produto-sem-imagem.svg',
    description: 'Ponteira de lápis em PLA, prática pra personalizar kits escolares ou brindes de papelaria. Kit com 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Ponteira Lápis - 25 UND',
    price: 'R$ 64,00',
    category: 'Utilidades',
    image: '/produto-sem-imagem.svg',
    description: 'Lote de 25 ponteiras de lápis em PLA com preço reduzido por volume, ideal pra quem monta kits de papelaria personalizados em escala.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Suporte Celular Personalizado - 10 UND',
    price: 'R$ 173,00',
    category: 'Utilidades',
    image: '/suporte-celular.png',
    description: 'Suporte de celular personalizável em PLA, pronto pra gravação a laser ou adesivo com nome/design do cliente. Lote de 10 unidades, ideal pra revenda ou brindes corporativos.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Suporte Celular Personalizado - 25 UND',
    price: 'R$ 400,00',
    category: 'Utilidades',
    image: '/suporte-celular.png',
    description: 'Lote de 25 suportes de celular em PLA, prontos pra personalização com nome ou design. Desconto por volume, indicado pra revenda ou eventos corporativos.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Anel Kettlebell - 10 UND',
    price: 'R$ 147,00',
    category: 'Chaveiro',
    image: '/porta-anel-kettlebell.png',
    description: 'Porta-anel formato kettlebell pra academia: potinho com tampa rosqueável que prende no chaveiro, guarda aliança/anéis com segurança durante o treino. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Anel Kettlebell - 25 UND',
    price: 'R$ 340,00',
    category: 'Chaveiro',
    image: '/porta-anel-kettlebell.png',
    description: 'Lote de 25 porta-anéis kettlebell pra academia — potinho com tampa rosqueável que prende no chaveiro. Desconto por volume, indicado pra revenda em academias.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Suporte Foto Flor - 10 UND',
    price: 'R$ 91,00',
    category: 'Utilidades',
    image: '/produto-sem-imagem.svg',
    description: 'Suporte de foto em formato de flor, em PLA — decora mesa ou escritório e segura fotos pequenas/polaroid. Lote de 10 unidades, ideal pra revenda em papelarias e lojas de decoração.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Suporte Foto Flor - 25 UND',
    price: 'R$ 210,00',
    category: 'Utilidades',
    image: '/produto-sem-imagem.svg',
    description: 'Lote de 25 suportes de foto flor em PLA, com desconto por volume. Indicado pra revenda em papelarias e lojas de decoração.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Guardanapo Logo - 10 UND',
    price: 'R$ 91,00',
    category: 'Mesa posta',
    image: '/produto-sem-imagem.svg',
    description: 'Porta-guardanapo em PLA com espaço pra gravação de logo — item de mesa posta, ideal pra eventos corporativos e presentes personalizados. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Guardanapo Logo - 25 UND',
    price: 'R$ 210,00',
    category: 'Mesa posta',
    image: '/produto-sem-imagem.svg',
    description: 'Lote de 25 porta-guardanapos com logo em PLA, com desconto por volume. Indicado pra eventos corporativos em maior escala.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Chaveiro Logo Vazado - 10 UND',
    price: 'R$ 99,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Chaveiro vazado com o contorno do seu logo, em PLA. Peça leve e resistente, pronta pra brinde corporativo em volume. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Chaveiro Logo Vazado - 25 UND',
    price: 'R$ 228,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Lote de 25 chaveiros vazados com logo em PLA, com desconto por volume. Indicado pra ações de marketing e brindes em massa.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Chaveiro Capacete - 10 UND',
    price: 'R$ 112,00',
    category: 'Chaveiro',
    image: '/produto-sem-imagem.svg',
    description: 'Chaveiro em formato de capacete, ideal pra quem é apaixonado por moto ou ciclismo. Leve, resistente e fácil de personalizar com cores. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Porta Batom Ondas - 10 UND',
    price: 'R$ 140,00',
    category: 'Chaveiro',
    image: '/produto-sem-imagem.svg',
    description: 'Porta batom com textura em ondas, prático pra levar batom ou protetor labial na bolsa sem sujar tudo. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Organizador de Cabos Logo - 10 UND',
    price: 'R$ 100,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Organizador de cabos com espaço pra logo gravado — prende cabos de carregador/USB na mesa e evita bagunça. Brinde corporativo funcional. Lote de 10 unidades.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 10 unidades',
    },
    badges: defaultBadges('PLA'),
  },
  {
    name: 'Organizador de Cabos Logo - 25 UND',
    price: 'R$ 230,00',
    category: 'Corporativo',
    image: '/produto-sem-imagem.svg',
    description: 'Lote de 25 organizadores de cabos com logo, com desconto por volume. Indicado pra kits de boas-vindas e onboarding corporativo.',
    specs: {
      'Materiais': 'PLA',
      'Quantidade': 'Lote de 25 unidades',
    },
    badges: defaultBadges('PLA'),
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
