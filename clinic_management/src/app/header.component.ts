import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { DoctorsComponent } from './doctors/doctors.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login component ';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DoctorsComponent,CartComponent,LoginComponent],
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
    <button (click)="do()">logout</button>
      </li>

      </ul>
    </div>
  </div>
</nav>
              `,
  styles: [``]
})
export class HeaderComponent {
  title = 'my-project';
  constructor(private router:Router , private auth:AuthService){}

  do(){
    this.auth.logout();
  }


}
