import { Injectable } from '@angular/core';
import { Quantity } from '../_models/quantity';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  // This service will be used only for the front. No connection to the back API.

  basketItems:Quantity[]=[];
  constructor() {
    if(localStorage.getItem("cartItems")!==null){
      this.basketItems=JSON.parse(localStorage.getItem("cartItems")||"[]");
    }

   }


  addItem(item:Quantity){
    let index = this.basketItems.findIndex(elt=>(elt.meal.id===item.meal.id) && (elt.menu.id===item.menu.id));
    if(index>=0){
      let result=this.basketItems[index];
      result.quantity++;
      localStorage.setItem("cartItems", JSON.stringify(this.basketItems));
    }else{
      this.basketItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(this.basketItems));
    }
     return this.basketItems;
  }

  removeItem(item:Quantity){
    let index = this.basketItems.findIndex(elt=>(elt.meal.id===item.meal.id) && (elt.menu.id===item.menu.id));
    this.basketItems.splice(index,1);
    localStorage.setItem("cartItems",JSON.stringify(this.basketItems));
  }

  getFullBasket(){
    return this.basketItems;
  }

  getTotalPrice(){}
}
