import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private injector: Injector, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authService = this.injector.get(AuthService);
    
   
    if (authService.isLoggedIn()) {
      // If user is logged in, allow access
    
      return true;
    } else {
     
        // If form values do not match stored token, redirect to login page
        this.router.navigate(['/sign']);
        return false;
      }
    }



    }
  

