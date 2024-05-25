import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  template: `
  <form #main="ngForm" (ngSubmit)="handleSubmit(main)">



  <input type="text" name="username"  placeholder="username"  required  #username="ngModel"  ngModel>
  @if(username.invalid && username.touched){
  @if(username.errors?.['required']){
    <span> the username is required </span>
      }
  }
  
  <br>


  <input type="password" name="password"  placeholder="password"  required  #password="ngModel"  ngModel>
  @if(password.invalid && password.touched){
  @if(password.errors?.['required']){
    <span> the password is required </span>
      }
  }


  <input type="submit">
  </form>
              `,
  styles: [`
  /* General form styling */
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top:70px;
}

/* Input styling */
input[type="text"],
input[type="password"] {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Error message styling */
form span {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Submit button styling */
input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
  `]
})

export class LoginComponent {
  title = 'my-project';

  constructor(private authservice:AuthService , private router:Router){}


  formData :any=[];
  data:any=[];


  httpCliet=inject(HttpClient)

  ngOnInit(): void {
  this.fetchData()
  }
  fetchData(){
    this.httpCliet.get('http://localhost:1999')
    .subscribe((data:any)=>{
      console.log(data.signs)
      this.data=data.signs;
    })
  }

handleSubmit(main:any) {

  this.formData=main.value;
  console.log(this.formData);


}



}