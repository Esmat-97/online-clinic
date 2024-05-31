import { Component} from '@angular/core';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [HttpClientModule , FormsModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})



export class NavigateComponent implements OnInit {


  constructor(private  activatedRoute:ActivatedRoute ){}
      
      hub:any;
      data:any=[];
      info:any=[];
      working:any=[];
      hours:any=[];
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

    this.httpCliet.get(`http://localhost:1999/doctor/navi/${this.doctorid}`).subscribe(  (res:any)=>{ 
      this.data=res
      this.info=this.data[0]
      console.log(this.data[0]); 
    });

    this.httpCliet.get(`http://localhost:1999/workinghours/${this.doctorid}`).subscribe(  (res:any)=>{ 
      this.working=res
      this.hours=this.working[0]
      console.log(this.hours); 
    });

      }
  
 

  
  


  
  }
  
 



  

