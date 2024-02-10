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
      httpCliet=inject(HttpClient)
    
      ngOnInit() {


        const email=this.activatedRoute.snapshot.params['email'];
    console.log(email); 


      
        this.httpCliet.get('https://randomuser.me/api?results=50').subscribe((res:any)=>{
          console.log(res.results)
          this.data=res.results
          console.log(this.data[3]); 
        })
      }
  
 

  
  


  
  }
  
 



  

