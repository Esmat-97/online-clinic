import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass,NgStyle],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>twitter</td>
    </tr>
  </tbody>
</table>
              `,
  styles: [``]
})
export class appointmentComponent {


}
