import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-peoplesays',
  standalone: true,
  imports: [NgFor],
  template: `

  <div class="row row-cols-1 row-cols-md-3 g-4 " id="main">
  
      <div class="col">
        <div class="card h-100" *ngFor="let x of data">
          <img src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40b7_testimonial-quote.svg">
          <div class="card-body">
          
            <p class="card-text">“{{x.text}}” </p>
            <br>
            <h5 class="card-title">{{x.username}}</h5>
            <h5 class="card-title">{{x.role}}</h5>
            
            <img src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40b8_testimonial-rating.svg" 
            loading="lazy" 
            alt="Testimonial Rating" 
            class="star-rating" 
            aria-hidden="true">
          </div>
        </div>
      </div>
  
  
    </div>`,
  styles: [`
  img{
    width: 50px;
    height: 50px
}

#main{
    background-color: aqua;
}
.col{
    margin-top: 150px;
    margin-bottom: 20px;
}
`]
})
export class PeoplesaysComponent {

  http=inject(HttpClient)

  data:any=[];

  ngOnInit(){
this.http.get('http://localhost:1999/review/accept').subscribe((res:any)=>{
this.data=res

})
  }

}
