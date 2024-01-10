export interface UpdateProductModel {
    title: string;
    description: string;
    price?: number;
    discount_percentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
  }