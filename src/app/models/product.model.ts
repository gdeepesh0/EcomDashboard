export interface Product {
  id: number;
  title: string;
  price: number;
  category: Category;
  rating: number;
  images: string[];
  description: string;
}


export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}