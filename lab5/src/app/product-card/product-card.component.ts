import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  createRange(arg0: number) {
    return new Array(Math.round(arg0)).fill(0).map((n, index) => index + 1);
  }
  @Input() product!: Product;

  constructor(private router: Router, private cart: CartService) {
  }

  goToProductDetails() {
    this.router.navigate(['/product', this.product.id]);
  }

  addToCart() {
    this.cart.addItem(this.product);
  }
}
