import { Image } from "./image";

export class UserIn {
  id: number;
  password: string;
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
  image: Image;

  constructor(
    id: number,
    password: string,
    address: string ,
    wallet: number,
    postalCode: string ,
    registrationDate: string ,
    email: string ,
    isLunchLady: boolean,
    name: string ,
    firstname: string ,
    phone: string ,
    town: string ,
    sex: number,
    image: Image,
  ){
    this.id = id;
    this.password = password;
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
    this.image = image;

    }

  }
