import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, RatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id!: number;
  product!: Product;

  constructor(private router: Router, private productsService: ProductsService, private cart: CartService) {
  }

  ngOnInit() {
    this.productsService.getProduct(this.id).subscribe((product) => { this.product = product });
  }

  addToCart() {
    this.cart.addItem(this.product);
  }

  routeToCart() {
    this.router.navigate(['/cart']);
  }

}
