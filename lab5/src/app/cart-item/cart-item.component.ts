import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private cart: CartService) { }

  increment() {
    this.cart.incItemQty(this.item.id);
  }

  decrement() {
    this.cart.decrementItemQty(this.item.id);
  }

  delete() {
    this.cart.deleteItem(this.item.id);
  }
}
