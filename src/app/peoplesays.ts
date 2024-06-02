import { Component } from '@angular/core';

@Component({
  selector: 'app-peoplesays',
  standalone: true,
  imports: [],
  template: `

  <div class="row row-cols-1 row-cols-md-3 g-4 " id="main">
  
      <div class="col">
        <div class="card h-100">
          <img src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40b7_testimonial-quote.svg">
          <div class="card-body">
          
            <p class="card-text">“I wish the world could know the wonderful things that are happening on the Doctorate hospital, who have had an injury that cured soon. ” </p>
            <br>
            <h5 class="card-title">Mark Brown</h5>
            <h5 class="card-title">Customer survice</h5>
            
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

}
