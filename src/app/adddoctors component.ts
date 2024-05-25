import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adddoctors',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  template: `
  <form #main="ngForm" (ngSubmit)="handleSubmit(main)">



  <input type="text" name="name"  placeholder="name"  required  #name="ngModel"  ngModel>
  @if(name.invalid && name.touched){
  @if(name.errors?.['required']){
    <span> the name is required </span>
      }
  }
  
  <br>


  <input type="text" name="speciality"  placeholder="speciality"  required  #speciality="ngModel"  ngModel>
  @if(speciality.invalid && speciality.touched){
  @if(speciality.errors?.['required']){
    <span> the speciality is required </span>
      }
  }


  
  <input type="text" name="year"  placeholder="year"  required  #year="ngModel"  ngModel>
  @if(year.invalid && year.touched){
  @if(year.errors?.['required']){
    <span>  the year is required   </span>
      }
  }
      
  
  



 
  


  <input type="text" name="hospital"  placeholder="hospital"  required  #hospital="ngModel"  ngModel>
  @if(hospital.invalid && hospital.touched){
  @if(hospital.errors?.['required']){
    <span>  the hospital is required   </span>
      }
  }
  


  <input type="text" name="location"  placeholder="location"  required  #location="ngModel"  ngModel>
  @if(location.invalid && location.touched){
  @if(location.errors?.['required']){
    <span>  the location is required   </span>
      }
  }
  

  <input type="text" name="gender"  placeholder="gender"  required  #gender="ngModel"  ngModel>
  @if(gender.invalid && gender.touched){
  @if(gender.errors?.['required']){
    <span>  the gender is required   </span>
      }
  }


  <input type="submit">
  </form>
              `,
  styles: [``]
})

export class AdddoctorsComponent {
  title = 'my-project';

  local:any [] =[];

  formData = {
    name: '',
    speciality: '',
    year: '',
    hospital: '',
    location: '',
    gender: '',

  };




constructor(private http: HttpClient) {}

handleSubmit(main:any) {

  this.formData=main.value;
  console.log(this.formData);

  this.http.post('http://localhost:1999/api', this.formData).subscribe( response => {
      console.log('Data sent successfully');
    },
    error => {
      console.error('Error occurred:', error);
      // Handle error here, show user appropriate message
    })
}



}