import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  cartSize: number = 0;
  constructor(private router: Router, private cart: CartService) {
    this.cart.getItemsCount().subscribe((size) => this.cartSize = size);
  }


  
}
