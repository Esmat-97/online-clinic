import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  img1:string="../../assets/desktop.jpg";
  img2:string="../../assets/bones.jpg";
  img3:string="../../assets/child.jpg";
  img4:string="../../assets/brain.jpg";
  img5:string="../../assets/teeth.jpg";
  img6:string="../../assets/nose.jpg";
}
