import { Meals } from "./meals";
import { User } from "./user";

export class Menu {

  id?: number;
  creationDate: Date;
  creationTime: Date;
  status: number;
  user: User[];

  constructor(creationDate: Date, creationTime: Date, status: number, imageId:number, user:User[],id?: number){
    this.creationDate=creationDate;
    this.creationTime=creationTime;
    this.status=status;
    this.user=user;
    this.id=id;
  }
}
