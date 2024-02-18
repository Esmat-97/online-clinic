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
    localStorage.removeItem('token');
    this.router.navigate(['/sign']);
  }

  isLoggedIn(): boolean {
    // Check if authentication token exists in local storage
    return localStorage.getItem('token') ? true : false;
  }


  gettoken(){
   
    return localStorage.getItem('token');
  }
}
