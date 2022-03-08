import { QuantityIn } from "./quantity-in";

export class OrderIn {

  constraintId:number;
  userId: number;
  quantity:QuantityIn[];

  constructor(constraintId:number=-1,userId:number,quantity:QuantityIn[]){
    this.constraintId=constraintId;
    this.userId=userId;
    this.quantity=quantity;
  }

}
