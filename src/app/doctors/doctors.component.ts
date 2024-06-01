import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddcartService } from '../services/addcart.service';
import { NavigateComponent } from '../navigate/navigate.component';
import { FooterComponent } from '../footer.component';
import { HeaderComponent } from '../header.component';
import { Route, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HOST_NAME } from '../constant';




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

constructor(
  private  router:Router
  ,private cartService: AddcartService){}
  httpCliet=inject(HttpClient)


role:string='';

ngOnInit(){
  
  this.role=localStorage.getItem('role') as string

  this.httpCliet.get(`${HOST_NAME}/doctor`).subscribe(  (res:any)=>{ 
    
     this.filterateData=res;
    this.doctors = res; 
    console.log(res); 

  });

}


/*           */


handleNavigation(id:any){
  this.router.navigate(['navi',id]);
}

 
  /*           */

applyFilter(){

  if (this.searchText === '') {
    this.filterateData = this.doctors; // Reset filter if search text is empty
  } else {
    this.filterateData = this.doctors.filter(item =>
        item.username.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  console.log(this.filterateData);
  console.log(this.searchText);
}



    /*         */
 
       filterMales(get:string){
        this.filterateData = this.doctors.filter(item => item.gender === get);
       }



       
     /*           */

        filterFeMales(get:string){
        this.filterateData = this.doctors.filter(item => item.gender === get);
         }                   



     /*            */      


    delete(id:number){   
     console.log(id)
  this.httpCliet.delete(`${HOST_NAME}/doctor/documents/${id}`).subscribe(  (res:any)=>{ 
   console.log(res); 
 });

           }



   /*              */           
                 
         addToCart(doctor:any){
            console.log(doctor)
            this.cartService.addToCart(doctor);
            window.alert('Product added to cart');
        
          }


                                                    

}



