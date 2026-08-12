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
    name: 'Carimbo Textura Tecido',
    price: 'R$ 29,00',
    category: 'Carimbos',
    image: '/product-1.png',
    description: 'Carimbo artesanal com textura de tecido, perfeito para estampas orgânicas em papel, tecido e argila.',
    specs: {
      'Materiais': 'Borracha sintética + cabo de madeira',
      'Medidas': '6cm x 8cm',
      'Cuidados': 'Limpar com pano úmido após o uso.',
    },
    badges: defaultBadges('Borracha sintética + cabo de madeira'),
  },
  {
    name: 'Luminária Geométrica',
    price: 'R$ 89,00',
    category: 'Luminárias',
    image: '/product-2.png',
    description: 'Luminária com design geométrico que projeta sombras decorativas pelas paredes. Ideal para ambientes modernos.',
    specs: {
      'Materiais': 'PLA biodegradável',
      'Medidas': 'Ø 18cm x A 22cm',
      'Potência': '5W — bivolt',
      'Cuidados': 'Não expor a temperaturas acima de 50°C.',
    },
    badges: defaultBadges('PLA biodegradável'),
  },
  {
    name: 'Porta Joias Personalizado',
    price: 'R$ 49,00',
    category: 'Porta joias',
    image: '/product-3.png',
    description: 'Porta joias modular com compartimentos pensados para colares, brincos e anéis. Personalizável com nome ou iniciais.',
    specs: {
      'Materiais': 'PLA premium',
      'Medidas': '15cm x 10cm x 5cm',
      'Cuidados': 'Manter longe de umidade.',
    },
    badges: defaultBadges('PLA premium'),
  },
  {
    name: 'Abridor de Lata',
    price: 'R$ 19,00',
    category: 'Abridores de lata',
    image: '/product-4.png',
    description: 'Abridor compacto e resistente, ergonômico e personalizável com logo ou mensagem.',
    specs: {
      'Materiais': 'ABS de alta resistência',
      'Comprimento': '10cm',
      'Cuidados': 'Lavar com água e sabão neutro.',
    },
    badges: defaultBadges('ABS de alta resistência'),
  },
  {
    name: 'Carimbo Redondo',
    price: 'R$ 35,00',
    category: 'Carimbos',
    image: '/product-1.png',
    description: 'Carimbo circular para logos e selos personalizados. Tinta uniforme e borracha de longa durabilidade.',
    specs: {
      'Materiais': 'Borracha sintética + cabo de madeira',
      'Diâmetro': '5cm',
      'Cuidados': 'Limpar com pano úmido após o uso.',
    },
    badges: defaultBadges('Borracha sintética + cabo de madeira'),
  },
  {
    name: 'Porta Joias Luxo',
    price: 'R$ 65,00',
    category: 'Porta joias',
    image: '/product-3.png',
    description: 'Versão ampliada com acabamento de luxo, suporte giratório para colares e gaveta para anéis.',
    specs: {
      'Materiais': 'PLA premium com pintura fosca',
      'Medidas': '20cm x 15cm x 8cm',
      'Cuidados': 'Manter longe de umidade e luz direta.',
    },
    badges: defaultBadges('PLA premium com pintura fosca'),
  },
  {
    name: 'Abridor Premium',
    price: 'R$ 25,00',
    category: 'Abridores de lata',
    image: '/product-4.png',
    description: 'Versão premium com acabamento fosco e encaixe perfeito na palma da mão. Ótimo como brinde corporativo.',
    specs: {
      'Materiais': 'ABS com acabamento fosco',
      'Comprimento': '12cm',
      'Cuidados': 'Lavar com água e sabão neutro.',
    },
    badges: defaultBadges('ABS com acabamento fosco'),
  },
  {
    name: 'Luminária Personalizada',
    price: 'R$ 99,00',
    category: 'Luminárias',
    image: '/product-2.png',
    description: 'Luminária totalmente customizável — forme, cor e texto. Entregue em até 7 dias úteis após aprovação.',
    specs: {
      'Materiais': 'PLA biodegradável',
      'Medidas': 'Sob consulta',
      'Potência': '8W — bivolt',
      'Cuidados': 'Não expor a temperaturas acima de 50°C.',
    },
    badges: defaultBadges('PLA biodegradável'),
  },
  {
    name: 'Cortador Floral',
    price: 'R$ 38,00',
    category: 'Cortadores',
    image: '/product-modal-main.jpeg',
    images: [
      '/product-modal-main.jpeg',
      '/product-thumb-1.jpeg',
      '/product-thumb-2.jpeg',
      '/product-thumb-3.jpeg',
    ],
    description:
      'Desenvolvido para ceramistas que buscam precisão e delicadeza. Cria bordas perfeitas com design inspirado na natureza. Ideal para placas, broches e objetos decorativos.',
    specs: {
      'Materiais': 'PLA de alta resistência',
      'Medidas': 'A (4cm) x L (6cm) x C (8cm)',
      'Cuidados': 'Lavar com água fria após o uso. Não expor a calor.',
    },
    badges: defaultBadges('PLA de alta resistência'),
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
