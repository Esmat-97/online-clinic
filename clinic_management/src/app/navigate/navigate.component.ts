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

  @Input () email ? :any; 
  
  constructor(
    private  DocRequests:DocRequestsService,
     private  activatedRoute:ActivatedRoute
      ){}
      

  ngOnInit(){
  
    this.DocRequests.doctorListNavi(this.email).subscribe(  (res)=>{ 

    console.log(res); })
  
  }
}
