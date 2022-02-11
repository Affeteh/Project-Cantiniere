import { Ingredients } from "./ingredients";

export class Meals {

  id: number;
  description: string;
  label: string;
  status: number;
  imageId : number;
  priceDF: number;
  availableForWeeks: number[];
  category: number;
  ingredients: Ingredients[];

  constructor(
    description: string,
    label:string,
    status:number,
    imageId:number,
    priceDf:number,
    availableForWeeks:number[],
    category: number,
    ingredients: Ingredients[],
    id:number=0){

      this.description=description;
      this.label=label;
      this.status=status;
      this.imageId=imageId;
      this.priceDF=priceDf;
      this.availableForWeeks=availableForWeeks;
      this.category=category;
      this.ingredients=ingredients;
      this.id=id;
  }

}
