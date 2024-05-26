import { JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private  router:Router) { }

 


  logout(): void {
    // Clear authentication token from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Check if authentication token exists in local storage
    return localStorage.getItem('token') ? true : false;
  }


  gettoken(){
   
    return localStorage.getItem('token');
  }
}
