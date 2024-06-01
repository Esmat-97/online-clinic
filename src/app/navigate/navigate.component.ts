import { Component} from '@angular/core';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HOST_NAME } from '../constant';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [HttpClientModule , FormsModule ,CommonModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})



export class NavigateComponent implements OnInit {


  constructor(private  activatedRoute:ActivatedRoute ){}
      
      
      data:any=[];
      info:any=[];

      working:any=[];
      hours:any=[];

      appointment:any=[];
      appointmentfordoc:any=[];

  

      role:any='';
      patientid:any='';
      doctorid:any='';
      username:any='';
      httpCliet=inject(HttpClient)
    
      ngOnInit() {
        this.role=localStorage.getItem('role')
        this.patientid=localStorage.getItem('user_id')
        this.username=localStorage.getItem('username')

     this.doctorid=this.activatedRoute.snapshot.params['id'];
    console.log(this.doctorid); 

    this.httpCliet.get(`${HOST_NAME}/doctor/navi/${this.doctorid}`).subscribe(  (res:any)=>{ 
      this.data=res
      this.info=this.data[0]
      console.log(this.info); 
    });

    this.httpCliet.get(`${HOST_NAME}/workinghours/${this.doctorid}`).subscribe(  (res:any)=>{ 
      this.working=res
      this.hours=this.working[0]
      console.log(this.hours); 
    });


    this.httpCliet.get(`${HOST_NAME}/appointment/${this.doctorid}`).subscribe(  (res:any)=>{ 
      this.appointment=res
      console.log(this.appointment); 
    });
      }
  
 

  
  

      make(main:any) {
      
        console.log(main.value)
        this.httpCliet.post(`${HOST_NAME}/appointment`,main.value).subscribe( response => {
            console.log('Data sent successfully');
            main.resetForm();
          },
          error => {
            console.error('Error occurred:', error);
            // Handle error here, show user appropriate message
          })
       
      
      }

  
  }
  
 



  

