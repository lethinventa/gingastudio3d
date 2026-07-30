export interface Product {
  name: string;
  price: string;
  category: string;
  image?: string;
  images?: string[];
  description?: string;
  specs?: Record<string, string>;
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
  },
];

export const featuredProducts = products.slice(0, 4);
