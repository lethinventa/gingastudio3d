export interface Product {
  name: string;
  price: string;
  category: string;
  image?: string;
  href?: string;
}

export const products: Product[] = [
  { name: 'Carimbo Textura Tecido', price: 'R$ 29,00', category: 'Carimbos', image: '/product-1.png' },
  { name: 'Luminária Geométrica', price: 'R$ 89,00', category: 'Luminárias', image: '/product-2.png' },
  { name: 'Porta Joias Personalizado', price: 'R$ 49,00', category: 'Porta Joias', image: '/product-3.png' },
  { name: 'Abridor de Lata', price: 'R$ 19,00', category: 'Utilidades', image: '/product-4.png' },
];

export const featuredProducts = products.slice(0, 4);
