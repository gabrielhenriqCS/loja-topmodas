export type ProductCategory = "Feminino" | "Masculino" | "Infantil" | "Acessórios";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  price?: number;
  featured?: boolean;
}

/**
 * Catálogo demonstrativo inicial.
 * Substitua os itens, imagens e preços pelos produtos reais da Top Modas.
 * A estrutura pode ser migrada depois para uma API ou banco de dados.
 */
export const products: Product[] = [
  {
    id: "blusa-casual",
    name: "Blusa casual",
    category: "Feminino",
    description: "Uma opção versátil para compor looks do dia a dia.",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "vestido-estampado",
    name: "Vestido estampado",
    category: "Feminino",
    description: "Uma peça leve para diferentes ocasiões.",
    image: "/placeholder.svg",
  },
  {
    id: "camiseta-basica",
    name: "Camiseta básica",
    category: "Masculino",
    description: "Conforto e praticidade para combinar com seu estilo.",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "camisa-casual",
    name: "Camisa casual",
    category: "Masculino",
    description: "Uma escolha versátil para ocasiões casuais.",
    image: "/placeholder.svg",
  },
  {
    id: "conjunto-infantil",
    name: "Conjunto infantil",
    category: "Infantil",
    description: "Uma combinação prática para os pequenos.",
    image: "/placeholder.svg",
  },
  {
    id: "vestido-infantil",
    name: "Vestido infantil",
    category: "Infantil",
    description: "Uma opção confortável para passeios e eventos.",
    image: "/placeholder.svg",
  },
  {
    id: "bolsa-casual",
    name: "Bolsa casual",
    category: "Acessórios",
    description: "Um acessório para completar diferentes produções.",
    image: "/placeholder.svg",
  },
  {
    id: "cinto-classico",
    name: "Cinto clássico",
    category: "Acessórios",
    description: "Um detalhe funcional para finalizar o visual.",
    image: "/placeholder.svg",
  },
];

export const productCategories = [
  "Todas",
  "Feminino",
  "Masculino",
  "Infantil",
  "Acessórios",
] as const;
