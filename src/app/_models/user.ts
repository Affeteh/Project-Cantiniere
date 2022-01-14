export class User {

    id: number;
    address: string;
    wallet: number;
    postalCode: string;
    registrationDate: string;
    email: string;
    isLunchLady: boolean;
    name: string;
    firstname: string;
    phone: string;
    town: string;
    sex: number;
    status: number;
    imageId: number;

  constructor(

    id: number = 0,
    address: string = '',
    wallet: number = 0,
    postalCode: string = '',
    registrationDate: string = '',
    email: string = '',
    isLunchLady: boolean,
    name: string = '',
    firstname: string = '',
    phone: string = '',
    town: string = '',
    sex: number = 0,
    status: number = 0,
    imageId: number = 0
    ){
  
     this.id = id;
     this.address = address;
     this.wallet = wallet;
     this.postalCode = postalCode;
     this.registrationDate = registrationDate;
     this.email = email;
     this.isLunchLady = isLunchLady;
     this.name = name;
     this.firstname = firstname;
     this.phone = phone;
     this.town = town;
     this.sex = sex;
     this.status = status;
     this.imageId = imageId

    }
  
  }
