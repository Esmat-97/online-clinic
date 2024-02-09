import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocRequestsService } from '../services/doc-requests.service';
import { NavigateComponent } from '../navigate/navigate.component';
import { FooterComponent } from '../footer.component';
import { HeaderComponent } from '../header.component';
import { Route, Router } from '@angular/router';




@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgFor,FormsModule,NavigateComponent,HeaderComponent,FooterComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})


export class DoctorsComponent implements OnInit{

  doctors: any[] = [];
  filterateData: any[] = [];
  searchText:any;

constructor(private  DocRequests:DocRequestsService,private  router:Router){}


ngOnInit(){

  this.DocRequests.doctorList().subscribe(  (res:any)=>{ 
     this.filterateData=res.results;
    this.doctors = res.results; 
   
console.log(this.doctors); 

})

}

                                      /*           */


handleNavigation(email:any){
  this.router.navigate(['navi',email]);
}

 
                                   /*           */

applyFilter(){

  if (this.searchText === '') {
    this.filterateData = this.doctors; // Reset filter if search text is empty
  } else {
    this.filterateData = this.doctors.filter(item =>
      item.name.first.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  console.log(this.filterateData);
  console.log(this.searchText);
}



                                     /*         */


       filterMales(get:string){
        this.filterateData = this.doctors.filter(item =>
          item.gender === get);
          console.log(get)
          console.log(this.filterateData)

       }


                                 /*           */



        filterFeMales(get:string){

        this.filterateData = this.doctors.filter(item => item.gender === get);
           console.log(get)
            console.log(this.filterateData)
                          
                  }                   
                  

                  
                              /*            */      


           delete(index:number){
           this.doctors.splice(index,1)
                                  }
                                                    

}



