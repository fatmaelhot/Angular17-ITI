import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'product/:id',
        component: ProductdetailsComponent
    },
    {
        path: 'login',
        component: LoginpageComponent
    },
    {path: 'cart',
component: CartComponent
},
    {
        path: 'register',
        component: RegisterpageComponent
    },
    {
        path: '**',
        component: NotfoundpageComponent
    }];
