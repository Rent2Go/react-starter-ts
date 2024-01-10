export interface ProductModel {
  id: number;
  title: string;
  description: string;
  price?: number;
  discount_percentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnailUrl?: string;
<<<<<<< HEAD
  images?: string[];
=======
  product_images?: string[];
>>>>>>> feyza
}
