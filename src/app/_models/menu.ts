import { Meals } from "./meals";

export class Menu {

  id?: number;
  description: string;
  label: string;
  status: number;
  imageID: number;
  priceDf:number;
  availableForWeeks: number[];
  meals : Meals[]

  constructor(description: string, label: string, status: number, imageId:number, priceDf: number,availableForWeeks: number[], meals: Meals[], id?: number){
    this.description=description;
    this.label=label;
    this.status=status;
    this.imageID=imageId;
    this.priceDf=priceDf;
    this.availableForWeeks=availableForWeeks;
    this.meals=meals;
    this.id=id;
  }
}
