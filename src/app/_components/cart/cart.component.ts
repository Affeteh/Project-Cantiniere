import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/_services/basket.service';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';
import { Quantity } from 'src/app/_models/quantity';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItems:Quantity[]=[];
  items:Quantity[]=[];
  meal:Meals=new Meals("","",0,0,0,[],0,[]);
  menu:Menu=new Menu("","",0,0,0,[],[]);


  //Ici il faut remplacer le type Any par le type "OrderIn" du OrderDTOIn dans le back
  //C'est cette commande qu'on enverra en bdd
  newOrder:any= {
    userid:0, // Il faut récupérer l'id du user grâce à la navBar car il sera authentifié
    constraintId:-1,
    quantity:[]};

  constructor(private cartService:BasketService,private mealService:MealsService,private menuService:MenuServiceService) { }

  ngOnInit(): void {

    this.orderItems=this.cartService.getFullBasket();
    console.log(this.orderItems);
  }

  soustract(item:Quantity){
    let copy = this.items.find(element => (element.meal==item.meal)&&(element.menu==item.menu));
    if(copy){
      copy.quantity<=0?copy.quantity=0:copy.quantity=copy.quantity-1;
    }
    return copy;

  }

  add(item:Quantity){
    let copy = this.items.find(element => (element.meal==item.meal)&&(element.menu==item.menu));
    if(copy){
      copy.quantity=copy.quantity+1;
    }
    return copy;
  }



}
