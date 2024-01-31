import { Product } from "./product";

export interface ProductApiResponse {
    products: Array<Product>;
    total: number;
    skip: number;
    limit: number;
}
