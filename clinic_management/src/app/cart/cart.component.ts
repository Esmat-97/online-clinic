import { Component } from '@angular/core';
import { AddcartService } from '../services/addcart.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items:any[]=[];

  constructor(
    private cartService:AddcartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items)
  }
}
