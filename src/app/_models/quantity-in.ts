export class QuantityIn {

    quantity: number;
    mealId : number;
    menuId: number;


  constructor(
    quantity: number,
    mealId : number,
    menuId: number,
    ){

     this.quantity = quantity;
     this.mealId = mealId;
     this.menuId=menuId
    }
}
