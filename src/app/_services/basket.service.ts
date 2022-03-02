import { Injectable } from '@angular/core';
import { Quantity } from '../_models/quantity';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  // This service will be used only for the front. No connection to the back API.

  basketItems:Quantity[]=[];
  constructor() { }


  addItem(item:Quantity){
     this.basketItems.push(item);
     return this.basketItems;
  }

  removeItem(id:number){
    let index = this.basketItems.findIndex(elt=>elt.id==id);
    return this.basketItems.slice(index,1);
  }

  getFullBasket(){
    return this.basketItems;
  }

  getTotalPrice(){}
}
