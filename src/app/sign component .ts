import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  template: `

  <h1>  sign in  </h1>
  <form #main="ngForm" (ngSubmit)="handleSubmit(main)">

  <input type="text" name="username"  placeholder="username"  required  #username="ngModel"  ngModel>
  @if(username.invalid && username.touched){
  @if(username.errors?.['required']){
    <span> the username is required </span>
      }
  }
  
  <br>

  <input type="text" name="email"  placeholder="email"  required  #email="ngModel"  ngModel>
  @if(email.invalid && email.touched){
  @if(email.errors?.['required']){
    <span> the email is required </span>
      }
  }
  
  <br>


  <input type="text" name="phone"  placeholder="phone"  required  #phone="ngModel"  ngModel>
  @if(phone.invalid && phone.touched){
  @if(phone.errors?.['required']){
    <span> the phone is required </span>
      }
  }
  
  <br>

  <input type="password" name="password"  placeholder="password"  required  #password="ngModel"  ngModel>
  @if(password.invalid && password.touched){
  @if(password.errors?.['required']){
    <span> the password is required </span>
      }
  }


  <br>




  <select
  class="form-select"
  name='role'
  required  #role="ngModel"  ngModel
  (change)="onRoleChange($event)"
>
  <option disabled selected>Select a role...</option>
  <option value="patient">Patient</option>
  <option value="doctor">Doctor</option>
  <option value="Admin">Admin</option>
</select>
<br>


@if(isDoc){
  
  <input type="text" name="hospital"  placeholder="hospital"  required  #hospital="ngModel"  ngModel>
  @if(hospital.invalid && hospital.touched){
  @if(hospital.errors?.['required']){
    <span> the hospital is required </span>
      }
  }

  <br>

  
  <input type="text" name="specialty"  placeholder="specialty"  required  #specialty="ngModel"  ngModel>
  @if(specialty.invalid && specialty.touched){
  @if(specialty.errors?.['required']){
    <span> the specialty is required </span>
      }
  }

  <br>

  
  <input type="text" name="location"  placeholder="location"  required  #location="ngModel"  ngModel>
  @if(location.invalid && location.touched){
  @if(location.errors?.['required']){
    <span> the location is required </span>
      }
  }
}

  <input type="submit">
<p>if you have account <a  (click)="go()">login</a> </p>

  </form>

 
              `,
  styles: [`
  /* General form styling */
button{
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top:70px;
}


  h1{
    display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top:70px;
  }
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
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


  `]
})

export class SignComponent {

  local:any [] =[];

  formData = {
    username: '',
    password: '',

  };

/*    */
  constructor(private http: HttpClient ,
    private router:Router) {}


handleSubmit(main:any) {

  this.formData=main.value;
  console.log(this.formData);

  this.http.post('http://localhost:1999/guests/signin', this.formData).subscribe( response => {
      console.log('Data sent successfully');
      main.resetForm();
    },
    error => {
      console.error('Error occurred:', error);
      // Handle error here, show user appropriate message
    })
 

}



/*   */
go(){
  this.router.navigate(['/login'])
}



/*   */
isDoc:boolean=false
onRoleChange(event: any) {
  if (event.target.value === 'doctor') {
    this.isDoc = true
  } else {
    this.isDoc = false
  }
}

}