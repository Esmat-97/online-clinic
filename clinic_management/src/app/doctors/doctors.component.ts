import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocRequestsService } from '../services/doc-requests.service';
import { NavigateComponent } from '../navigate/navigate.component';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgFor,NavigateComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})


export class DoctorsComponent implements OnInit{

  doctors: any[] = [];

constructor(private  DocRequests:DocRequestsService,private  router:Router){}


handleNavigation(){
  this.router.navigate(['/navi']);
}
 

ngOnInit(){

  this.DocRequests.doctorList().subscribe(  (res:any)=>{ 
    this.doctors = res.results; 
  console.log(this.doctors); })

}
}



