import { Component } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: CartItem[] = [];
  cartPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((cart: CartItem[]) => { this.cart = cart });
    this.cartService.getCartTotalPrice().subscribe((price: number) => { this.cartPrice = price })
  }
}
