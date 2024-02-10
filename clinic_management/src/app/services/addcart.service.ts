import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {



  items :any= [];

  addToCart(product:any) {
    this.items.push(product);
  }



  getItems() {
    return this.items;
  }
}
