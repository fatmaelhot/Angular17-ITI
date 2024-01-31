import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductApiResponse } from '../interfaces/product-api-response';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fetch: HttpClient) {
  }

  getProductList(): Observable<ProductApiResponse> {
    return this.fetch.get<ProductApiResponse>('https://dummyjson.com/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.fetch.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}
