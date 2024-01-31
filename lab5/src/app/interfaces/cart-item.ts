import { Product } from "./product";

export interface CartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>
    createdAt: string;
    qty: number;
    totalPrice: number;
}
