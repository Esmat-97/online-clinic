import { Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { NavigateComponent } from './navigate/navigate.component';

export const routes: Routes = [
    {path: 'doctors', component:DoctorsComponent},
    {path: 'navi', component:NavigateComponent}
];
