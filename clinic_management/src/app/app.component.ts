import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CarouslComponent } from './carousl/carousl.component';
import { CardsComponent } from './cards/cards.component';
import { HeroComponent } from './hero/hero.component';
import { TypesComponent } from './types/types.component';
import { LocationsComponent } from './locations/locations.component';
import { CounterComponent } from './counter/counter.component';
import { PeoplesaysComponent } from './peoplesays/peoplesays.component';
import { DoctorsComponent } from './doctors/doctors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,CarouslComponent,CardsComponent,HeroComponent,TypesComponent,LocationsComponent,CounterComponent,PeoplesaysComponent,DoctorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinic_management';
  name:any;
}
