export class MenuIn {

  id: number;
  description: string;
  label: string;
  status: number;
  imageId: number;
  priceDF:number;
  availableForWeeks: number[];
  mealIds : number[]


  constructor(description: string, label: string, status: number=0, imageId:number=0, priceDf: number,availableForWeeks: number[], meals: number[], id: number=0){
    this.description=description;
    this.label=label;
    this.status=status;
    this.imageId=imageId;
    this.priceDF=priceDf;
    this.availableForWeeks=availableForWeeks;
    this.mealIds=meals;
    this.id=id;
  }
}
