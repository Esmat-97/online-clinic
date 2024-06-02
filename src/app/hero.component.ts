import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img [src]="imageUrls[0]" class="d-block w-100" alt="Image 1">
    </div>
    <div class="carousel-item">
      <img [src]="imageUrls[1]" class="d-block w-100" alt="Image 2">
    </div>
    <div class="carousel-item">
      <img [src]="imageUrls[2]" class="d-block w-100" alt="Image 3">
    </div>
  </div>
</div>
`,
  styles: ``
})



export class HeroComponent {
  imageUrls: string[] = [
    '../../assets/istockphoto 3jpg.jpg  ',
    '../../assets/istockphoto 1.jpg',
    '../../assets/istockphoto-1172499310-612x612.jpg ',
    
  ];
  

  

  

}

   
