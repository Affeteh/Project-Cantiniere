import { Ingredients } from "./ingredients";
import { Meals } from "./meals";

export class Quantity {

    id?: number;
    quantity: number;
    meal : Meals[];
    category: number;
    ingredients: Ingredients[];
    

  constructor(
    quantity: number,
    meal : Meals[],
    category: number,
    ingredients: Ingredients[],
    id?: number
    ){

     this.quantity = quantity;
     this.meal = meal;
     this.category = category;
     this.ingredients = ingredients;
     this.id = id;

    }

  }
