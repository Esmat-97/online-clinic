import { Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdddoctorsComponent } from './adddoctors component';

export const routes: Routes = [
    {path: 'doctors', component:DoctorsComponent},
    {path: 'navi/:email', component:NavigateComponent},
    {path: 'cart', component:CartComponent},
    {path: 'add', component:AdddoctorsComponent},
    {path: '', component:HomeComponent}
];
