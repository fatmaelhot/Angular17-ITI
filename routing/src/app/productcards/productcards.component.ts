import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Interface } from '../interface';
import { CurrencyPipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-productcards',
  standalone: true,
  imports: [CurrencyPipe,RatingComponent],
  templateUrl: './productcards.component.html',
  styleUrl: './productcards.component.css'
})
export class ProductcardsComponent {
Interface: any;
  createRange(arg0: number) {
    return new Array(Math.round(arg0)).fill(0).map((n, index) => index + 1);
  }
  @Input() product!: Interface;

  constructor(private router: Router) {
  }

  goToProductDetails() {
    this.router.navigate(['product', this.product.id]);
  }
  
}
