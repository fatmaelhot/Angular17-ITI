import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';
import { ProductApiResponse } from '../interfaces/product-api-response';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products!: Array<Product>;

  constructor(private productsService: ProductsService) {
    this.productsService.getProductList().subscribe((item: ProductApiResponse) => { this.products = item.products });
  }
}
