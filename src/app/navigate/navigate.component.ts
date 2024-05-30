import { Component} from '@angular/core';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})



export class NavigateComponent implements OnInit {


  constructor(private  activatedRoute:ActivatedRoute ){}
      
      hub:any;
      data:any=[];
      info:any=[];
      role:any='';
      httpCliet=inject(HttpClient)
    
      ngOnInit() {
        this.role=localStorage.getItem('role')

      const id=this.activatedRoute.snapshot.params['id'];
    console.log(id); 

    this.httpCliet.get(`http://localhost:1999/doctor/navi/${id}`).subscribe(  (res:any)=>{ 
      this.data=res
      this.info=this.data[0]
      console.log(this.data[0]); 
    });
      }
  
 

  
  


  
  }
  
 



  

