import { Meals } from "./meals";
import { Menu } from "./menu";

export class Quantity {

    id: number;
    quantity: number;
    meal : Meals;
    menu: Menu;


  constructor(
    quantity: number,
    meal : Meals,
    menu: Menu,
    id: number=0
    ){

     this.quantity = quantity;
     this.meal = meal;
     this.menu=menu
     this.id = id;

    }

  }
