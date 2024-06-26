import { Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HomeComponent } from './home.component';
import { CartComponent } from './cart/cart.component';
import { AdddoctorsComponent } from './adddoctors component';

import { SignComponent } from './sign';
import { LoginComponent } from './login.component ';
import { appoinComponent } from './appiont';
import { UserComponent } from './users';
import { AuthGuard } from './guards/auth.guard';
import { contactComponent } from './contactus';
import { msgsComponent } from './msgs';
import { reviewComponent } from './review';
import { showreviewComponent } from './showreview';

export const routes: Routes = [
    {path: 'doctors', component:DoctorsComponent},
    {path: 'navi/:id', component:NavigateComponent},
    {path: 'cart', component:CartComponent},
    {path: 'add', component:AdddoctorsComponent},
    {path: 'login', component:LoginComponent},
    {path: 'sign', component:SignComponent},
    {path: 'user', component:UserComponent},
    {path: 'contact', component:contactComponent},
    {path: 'msgs', component:msgsComponent},
    {path: 'review', component:reviewComponent},
    {path: 'showreview', component:showreviewComponent},
    {path: 'appoin', component:appoinComponent},
    {path: '', component:HomeComponent}
];
