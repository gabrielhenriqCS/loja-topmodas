export interface Category {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  createdAt: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  position: number;
}

export interface ProductSize {
  id: string;
  productId: string;
  size: string;
  stockQuantity: number;
  active: boolean;
}

export interface ProductWithRelations {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  price: number | string;
  featured: boolean;
  active: boolean;
  categoryId?: string | null;
  category?: Category | null;
  images: ProductImage[];
  sizes: ProductSize[];
  createdAt: string;
  updatedAt: string;
}
