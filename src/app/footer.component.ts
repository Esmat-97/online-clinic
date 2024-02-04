import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet],
  template: `

  
  <footer class="footer" class=" bg-info text-black">
    <div class="container">
      <div class="row ">

        <div class="col-md-4  col-lg-3">
          <h5>Company</h5>
          <ul>
      <p>    <a href="#w">About Us   </a>  </p>
      <p>  <a href="#w">Contact Us  </a>   </p>
      <p>   <a href="#w">Careers     </a> </p>
          </ul>
        </div>

        <div class="col-md-4   col-lg-3">
          <h5>Search by</h5>
          <ul >
          <p>   <a href="#w">Speciality  </a> </p>
          <p>   <a href="#w">Area         </a> </p>
          <p>    <a href="#w">Insurance    </a> </p>
          <p>     <a href="#w">Hospital      </a> </p>
          <p>    <a href="#w">Center        </a> </p>
          </ul>
        </div>

        <div class="col-md-4  col-lg-3">
          <h5>Follow Us</h5>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">Instagram</a></p>
        </div>


        <div class="col-md-4  col-lg-3">
        <h5> Need Help?</h5>
        <p><a href="#">Medical Library</a></p>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">Terms Of Use</a></p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Doctors Privacy Policy</a></p>
      </div>

     






      </div>

      <hr>

      <div class="row">
        <div class="col-md-3  col-lg-10 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
              `,
  styles: [`a{
    text-decoration:none;
    color:white;
  }`]
})
export class FooterComponent {
  title = 'my-project';
  
}