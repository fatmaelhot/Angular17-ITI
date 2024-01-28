import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ProductComponent,LoginpageComponent,RegisterpageComponent,NotfoundpageComponent,CartComponent,ProductdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}
