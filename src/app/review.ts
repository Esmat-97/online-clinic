import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { HOST_NAME } from './constant';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  template: `

  <div class="container">
  <form #main="ngForm" (ngSubmit)="handleSubmit(main)">

    <input type="hidden" id="fname" placeholder="Your name.."  name="user_id"   #user_id="ngModel"  [(ngModel)]="id">

    <input type="hidden" id="fname"  placeholder="Your name.."  name="username"   #username="ngModel"   [(ngModel)]="name">

    <input type="hidden" id="fname"  placeholder="Your name.."  name="status"   #status="ngModel"   [(ngModel)]="ted">

    <input type="hidden" id="fname"  placeholder="Your name.."  name="role"   #role="ngModel"   [(ngModel)]="the_role">

    <textarea id="subject"  placeholder="Write something.."   name="text"   #text="ngModel"  ngModel style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
              `,
  styles: [`

  input[type=text], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
  }
  
  /* Style the submit button with a specific background color etc */
  input[type=submit] {
    background-color: #FF7F50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* When moving the mouse over the submit button, add a darker green color */
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  /* Add a background color and some padding around the form */
  .container {
    border-radius: 5px;
    background-color: #FFF8DC;
    padding: 20px;
  }
  `]
})

export class reviewComponent {

  constructor(private router:Router){}

  httpCliet=inject(HttpClient)

  id:any='';
  name:any='';
  the_role:any='';
  ted:any='pending';

  ngOnInit(){
  this.id= localStorage.getItem('user_id')
  this.name= localStorage.getItem('username')
  this.the_role= localStorage.getItem('role')
  }

handleSubmit(main:any) {
  this.httpCliet.post(`${HOST_NAME}/review`,main.value).subscribe((data:any)=>{
    console.log(data)
  })

}

}