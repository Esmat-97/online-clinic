import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CardsComponent } from './cards/cards.component';
import { HeroComponent } from './hero.component';
import { TypesComponent } from './types';
import { LocationsComponent } from './locations.component';
import { CounterComponent } from './counter/counter.component';
import { PeoplesaysComponent } from './peoplesays';
import { DoctorsComponent } from './doctors/doctors.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CardsComponent,HeroComponent,TypesComponent,LocationsComponent,CounterComponent,PeoplesaysComponent,DoctorsComponent],
  template: `
  <app-header></app-header>
  <br>
  <app-hero></app-hero>
  <br>
  <app-cards></app-cards>
  <br>
  <app-types></app-types>
  <br>
  <app-counter></app-counter>
  <br>
  <br>
  <app-peoplesays></app-peoplesays>
  <br>
  <app-locations></app-locations>
  <br>
  <app-footer></app-footer>
  `,
  styles: [``]
})
export class HomeComponent {

}
