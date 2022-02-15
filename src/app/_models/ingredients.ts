export class Ingredients {

  id: number;

  description: string;

  label: string;

  status: number;

  imageId:number ;



    constructor (
      description: string,

      label: string,

      status: number,

      imageId: number,

      id: number=0
      ){
        this.id = id;

        this.description = description;

        this.label= label;

        this.status= status;

        this.imageId=imageId;
      }
    }
