import { Image } from "./image";

export class MealIn {
  id: number;
  description: string;
  label: string;
  status: number;
  image?: Image;
  priceDF: number;
  availableForWeeks: number[];
  category: number;
  ingredientsId: number[];

  constructor(
    description: string,
    label:string,
    status:number,
    priceDf:number,
    availableForWeeks:number[],
    category: number,
    ingredientsId: number[],
    id:number=0,
    image?:Image){

      this.description=description;
      this.label=label;
      this.status=status;
      this.image=image;
      this.priceDF=priceDf;
      this.availableForWeeks=availableForWeeks;
      this.category=category;
      this.ingredientsId=ingredientsId;
      this.id=id;
  }
}
