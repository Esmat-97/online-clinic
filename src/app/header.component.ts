import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { DoctorsComponent } from './doctors/doctors.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login component ';
import { AuthService } from './services/auth.service';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DoctorsComponent,CartComponent,LoginComponent,NgClass,NgStyle],
  template: `
  <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" routerLink="" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="doctors" href="#">doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="cart" href="#">cart</a>
        </li>
  
        <li class="nav-item ">
    <a class="nav-link"  (click)="do()">login</a>
      </li>

      @if(role =='Admin'){
      <div class="dropdown" >
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" (click)="toggleDropdown()">
        Admin list
      </button>
      <ul class="dropdown-menu" [ngStyle]="{'display': isDropdownOpen ? 'block' : 'none'}">
        <li><a class="dropdown-item" routerLink="users"> users</a></li>
        <li><a class="dropdown-item" routerLink="msgs"> msgs</a></li>
        <li><a class="dropdown-item" routerLink="showreview"> reviews</a></li>
        <li><a class="dropdown-item" routerLink="Addproduct">Add products</a></li>
        <li><a class="dropdown-item"  routerLink="Addusers">Add users</a></li>
      </ul>
    </div>
      }
      </ul>
    </div>
  </div>
</nav>
              `,
  styles: [``]
})
export class HeaderComponent {

  /*   */
  constructor(private router:Router , 
    private auth:AuthService){}

  do(){
    this.auth.logout()
    this.router.navigate(['/login'])
  }



  /*   */
  isDropdownOpen: boolean = false;
  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }



  /*   */
  role:string='';
  ngOnInit(){
this.role= localStorage.getItem('role') as string
  }
}
