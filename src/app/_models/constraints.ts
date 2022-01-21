import { LocalTime } from "./local-time";

export class Constraints {

  id?: number;

  orderTimeLimit:	LocalTime;

  maximumOrderPerDay: number;

  rateVAT	:number;

  constructor(

    orderTimeLimit:	LocalTime,

    maximumOrderPerDay: number,

    rateVAT: number,

    id?: number

  ){
    this.orderTimeLimit = orderTimeLimit ;
    this.maximumOrderPerDay =maximumOrderPerDay;
    this.rateVAT = rateVAT;
    this.id = id ;
  }
}
