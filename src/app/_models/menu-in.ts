import { Image } from "./image";

export class MenuIn {

  id: number;
  description: string;
  label: string;
  status: number;
  image?: Image;
  priceDF:number;
  availableForWeeks: number[];
  mealIds : number[]


  constructor(description: string, label: string, status: number=0, priceDf: number,availableForWeeks: number[], meals: number[], id: number=0,image?:Image){
    this.description=description;
    this.label=label;
    this.status=status;
    this.image=image;
    this.priceDF=priceDf;
    this.availableForWeeks=availableForWeeks;
    this.mealIds=meals;
    this.id=id;
  }
}
