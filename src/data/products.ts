export type ProductCategory = "Feminino" | "Masculino" | "Infantil" | "Acessórios";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  price?: number;
  featured?: boolean;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "vestido-elegance-rose",
    name: "Vestido Midi Floral Romance",
    category: "Feminino",
    description: "Vestido midi com caimento fluido, estampa suave e decote sofisticado. Perfeito para festas e ocasiões especiais.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    price: 189.9,
    featured: true,
    tag: "Mais Vendido",
  },
  {
    id: "conjunto-alfaiataria-chic",
    name: "Conjunto Alfaiataria Chic",
    category: "Feminino",
    description: "Blazer estruturado com calça reta de corte impecável. Elegância e poder para o ambiente de trabalho e eventos.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    price: 249.9,
    featured: true,
    tag: "Tendência",
  },
  {
    id: "camisa-linho-premium",
    name: "Camisa Masculina em Linho Puro",
    category: "Masculino",
    description: "Camisa de linho manga longa com toque suave e modelagem slim contemporânea. Conforto térmico absoluto.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    price: 159.9,
    featured: true,
  },
  {
    id: "polo-classic-urban",
    name: "Camisa Polo Piquet Premium",
    category: "Masculino",
    description: "Algodão piquet egípcio com acabamento refinado na gola. Visual clássico para momentos casuais e encontros.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    price: 119.9,
    featured: false,
  },
  {
    id: "conjunto-kids-alegria",
    name: "Conjunto Infantil Verão Color",
    category: "Infantil",
    description: "Tecido 100% algodão macio antialérgico com cores vivas e confortáveis para o dia a dia dos pequenos.",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
    price: 89.9,
    featured: true,
    tag: "Infantil",
  },
  {
    id: "vestidinho-princesa-kids",
    name: "Vestido Infantil Bordado Floral",
    category: "Infantil",
    description: "Vestidinho leve com detalhes delicados de renda e bordado, ideal para aniversários e ensaios fotográficos.",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    price: 99.9,
    featured: false,
  },
  {
    id: "bolsa-couro-tote",
    name: "Bolsa Estruturada em Couro Sintético",
    category: "Acessórios",
    description: "Amplo espaço interno com divisórias e alça transversal removível. Acabamento dourado de alto padrão.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    price: 179.9,
    featured: true,
    tag: "Acessório",
  },
  {
    id: "cinto-fivela-dourada",
    name: "Cinto Fino com Fivela Metalizada",
    category: "Acessórios",
    description: "Design minimalista e atemporal, perfeito para marcar a cintura em vestidos ou enriquecer calças de alfaiataria.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    price: 49.9,
    featured: false,
  },
];

export const productCategories = [
  "Todas",
  "Feminino",
  "Masculino",
  "Infantil",
  "Acessórios",
] as const;
