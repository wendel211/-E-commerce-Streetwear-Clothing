export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}