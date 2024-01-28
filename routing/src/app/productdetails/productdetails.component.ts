import { Component,Input, OnInit } from '@angular/core';
import { Interface } from '../interface';
import { Router ,Route, ActivatedRoute} from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CurrencyPipe,PercentPipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { routes } from '../app.routes';


@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CurrencyPipe,RatingComponent,PercentPipe,ProductComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class  ProductdetailsComponent  {
  /*@Input() id!: number;
  interface?: Interface;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const data: any = []; // You may want to replace this with your actual data
    const products: Array<Interface> = data.default || [];

    // Check if 'this.id' is defined and non-null before attempting to find in the array
    if (this.id !== undefined && this.id !== null) {
      this.interface = products.find((element: Interface) => element.id == this.id);
    }

    if (this.interface === undefined) {
      console.error(`Product with id ${this.id} not found. Redirecting to 'notfound' route.`);
      this.router.navigate(['notfound']);
    }
  }*/

  Interface: any;
  createRange(arg0: number) {
    return new Array(Math.round(arg0)).fill(0).map((n, index) => index + 1);
  }
  @Input() product!: Interface;

  constructor(private router: Router) {
  }

 
}
  

