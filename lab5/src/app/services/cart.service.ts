
import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { BehaviorSubject, Observable, map, reduce } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]);

  getCart() {
    return this.cart.asObservable();
  }

  getItemsCount() {
    return this.cart.pipe(
      map(cart => cart.reduce((acc, item) => acc + (item.qty), 0))
    );
  }

  getCartTotalPrice(): Observable<number> {
    return this.cart.pipe(
      map(cart => cart.reduce((acc, item) => acc + (item.price * item.qty), 0))
    );
  }

  addItem(product: Product) {
    const cart: Array<CartItem> = this.cart.value;
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex === -1) {
      cart.push({ ...product, qty: 1, totalPrice: product.price });
    } else {
      cart[existingItemIndex].qty++;
      this.updateItemTotalPrice(cart, cart[existingItemIndex].id);
    }

    this.cart.next([...cart]);
  }

  incItemQty(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const item: CartItem | undefined = cart.find(item => item.id === id);
    if (item == undefined) {
      return;
    }

    ++item.qty;
    this.updateItemTotalPrice(cart, item.id);
    this.cart.next([...cart]);
  }

  decrementItemQty(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const item: CartItem | undefined = cart.find(item => item.id === id);
    if (item == undefined) {
      return;
    }

    if (item.qty < 2) {
      this.deleteItem(id);
      return;
    }

    --item.qty;
    this.updateItemTotalPrice(cart, item.id);
    this.cart.next([...cart]);
  }

  deleteItem(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const updatedCart = cart.filter(item => item.id !== id);

    this.cart.next([...updatedCart]);
  }

  private updateItemTotalPrice(cart: Array<CartItem>, id: number) {
    let itemToUpdate: CartItem | undefined = cart.find((item) => item.id === id);

    if (itemToUpdate === undefined) {
      return;
    }

    itemToUpdate.totalPrice = itemToUpdate.price * itemToUpdate.qty;
    return;
  }
}
