import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [],
  template: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mayo Clinic Locations</title>
      <style>
          body {
              font-family: Arial, sans-serif;
          }
          .locations {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              grid-gap: 20px;
              padding: 10px;
          }
          .location {
              background-color: #f1f1f1;
              padding: 35px;
              border-radius: 5px;
              text-align: center;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              font-weight: 900;
          }
  
          .location a {
              color: #333;
              text-decoration: none;
          }
          .location a:hover {
              color: #007bff;
          }
          #a{
              background-image: url('../../assets/rochaster.jpg');
              background-repeat: no-repeat;
              background-size: cover;
          }
          #b{
              background-image: url('../../assets/phonix.jpg');
              background-repeat: no-repeat;
              background-size: cover;
          }
          #c{
              background-image: url('../../assets/florida.jpg');
              background-repeat: no-repeat;
              background-size: cover;
          }
          #d{
              background-image: url('../../assets/london.jpg');
              background-repeat: no-repeat;
              background-size: cover;
          }
  
          #e{
              background-image: url('../../assets/lowa.jpg');
              background-repeat: no-repeat;
              background-size: cover;
          }
  
        
      </style>
  </head>
  <body>
      <div class="locations">
          <div class="location" >
              <h1>locations</h1>
              <p>Learn more about Mayo Clinic locations or choose a specific location.</p>
              <a href="https://www.mayoclinic.org/locations/minnesota/rochester"   class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Learn more</a>
          </div>
          <div class="location" id="a">
              <h3>Mayo Clinic in Minnesota</h3>
              <p>Rochester</p>
              <a href="https://www.mayoclinic.org/locations/minnesota/rochester">Learn more</a>
          </div>
          <div class="location"  id="b">
              <h3>Mayo Clinic in Arizona</h3>
              <p>Phoenix & Scottsdale</p>
              <a href="https://www.mayoclinic.org/locations/arizona/phoenix-scottsdale">Learn more</a>
          </div>
          <div class="location"  id="c">
              <h3>Mayo Clinic in Florida</h3>
              <p>Jacksonville</p>
              <a href="https://www.mayoclinic.org/locations/florida/jacksonville">Learn more</a>
          </div>

          
          <div class="location"  id="d">
              <h3>Mayo Clinic in London</h3>
              <p>London, United Kingdom</p>
              <a href="https://www.mayoclinic.org/locations/london">Learn more</a>
          </div>
  
  
          <div class="location" id="e">
              <h3>Mayo Clinic Health System </h3>
              <p>Iowa, Minnesota, Wisconsin</p>
              <a href="https://www.mayoclinic.org/locations/florida/jacksonville">Learn more</a>
          </div>
        
      </div>
  </body>
  </html>
       `,
  styles: [``]
})


export class LocationsComponent {

}
