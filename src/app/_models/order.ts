import { Quantity } from "./quantity";
import { User } from "./user";

export class Order {

  id: number;
  creationDate: Date;
  creationTime: Date;
  status: number;
  user: User;
  quantity:Quantity[];

  constructor(creationDate: Date, creationTime: Date, status: number, user:User,quantity:Quantity[],id: number=0){
    this.creationDate=creationDate;
    this.creationTime=creationTime;
    this.status=status;
    this.user=user;
    this.quantity=quantity;
    this.id=id;
  }
}
