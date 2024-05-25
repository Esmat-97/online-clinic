import { Component } from '@angular/core';

import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { CarouslComponent } from '../carousl/carousl.component';
import { CardsComponent } from '../cards/cards.component';
import { HeroComponent } from '../hero/hero.component';
import { TypesComponent } from '../types/types.component';
import { LocationsComponent } from '../locations/locations.component';
import { CounterComponent } from '../counter/counter.component';
import { PeoplesaysComponent } from '../peoplesays/peoplesays.component';
import { DoctorsComponent } from '../doctors/doctors.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CarouslComponent,CardsComponent,HeroComponent,TypesComponent,LocationsComponent,CounterComponent,PeoplesaysComponent,DoctorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
