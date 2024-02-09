import { Component} from '@angular/core';
import { DocRequestsService } from '../services/doc-requests.service';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})



export class NavigateComponent {

   member:any;
   
   
  branched:any[]=[];

  @Input () email  :any; 
  
  constructor(
private   DocRequests:DocRequestsService,
 private  activatedRoute:ActivatedRoute
      ){}
      

  ngOnInit(){
  
    const email=this.activatedRoute.snapshot.params['email'];
    console.log(email); 


    this.DocRequests.doctorList().subscribe(  (res:any)=>{ console.log(res); 
    this.branched=res.results;
    console.log(this.branched); 



  
    this. member = this.branched.find((member: any) => member.email == email);
    if (this.member) {
      console.log( this.member);
    } else {
      console.log("Member not found");
    }

  
  });


  
  }
  
 



  }

