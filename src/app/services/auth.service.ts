import { JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private  router:Router,
    private http:HttpClient) { }

 


  logout(): void {
    // Clear authentication token from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    this.http.post(`http://localhost:1999/Auth/logout`, {}, { headers })
      .subscribe(response => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
  }


  isLoggedIn(): boolean {
    // Check if authentication token exists in local storage
    return localStorage.getItem('token') ? true : false;
  }


  gettoken(){
   
    return localStorage.getItem('token');
  }
}
