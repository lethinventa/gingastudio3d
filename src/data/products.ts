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
    name: 'Porta Joias Personalizado - 10 UND',
    price: 'R$ 140,00',
    category: 'Porta joias',
    image: '/product-3.png',
    description: 'Porta joias modular com compartimentos pensados para colares, brincos e anéis. Personalizável com logos ou iniciais. Acompanha argola de chaveiro.',
    specs: {
      'Materiais': 'PLA premium',
      'Medidas': '15cm x 10cm x 5cm',
      'Cuidados': 'Manter longe de umidade.',
    },
    badges: defaultBadges('PLA premium'),
  },
  {
    name: 'Abridor de Lata Boca - 10 UND',
    price: 'R$ 108,00',
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
    name: 'Porta Joias Premium - 10 UND',
    price: 'R$ 200,00',
    category: 'Porta joias',
    image: '/product-3.png',
    description: 'Versão premium do Porta Joias. Essa versão tem acabamento com feltro para não arranhar as joias e acompanha mosquetão.',
    specs: {
      'Materiais': 'PLA premium com pintura fosca',
      'Medidas': '20cm x 15cm x 8cm',
      'Cuidados': 'Manter longe de umidade e luz direta.',
    },
    badges: defaultBadges('PLA premium com pintura fosca'),
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
