import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/_services/basket.service';
import { Quantity } from 'src/app/_models/quantity';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { Router } from '@angular/router';
import { QuantityIn } from 'src/app/_models/quantity-in';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  orderItems:QuantityIn[]=[];
  items:Quantity[]=[];
  meal:Meals=new Meals("","",0,0,0,[],0,[]);
  menu:Menu=new Menu("","",0,0,0,[],[]);
  stillTime:boolean=true


  //Ici il faut remplacer le type Any par le type "OrderIn" du OrderDTOIn dans le back
  //C'est cette commande qu'on enverra en bdd
  newOrder:any= {
    userId:4, // Il faut récupérer l'id du user grâce à la navBar car il sera authentifié (le user peut être dans une session storage)
    constraintId:-1,
    quantity:[]};

  constructor(private cartService:BasketService,
    private router:Router,
    private httpClient :HttpClient //sera remplacé par le service des commandes
    ) { }

  ngOnInit(): void {

    //Get the cart (persisted values)
    if(localStorage.getItem("cartItems")!==null){
      this.items=JSON.parse(localStorage.getItem("cartItems") || "[]");
    }
  }

  goBack(){
      this.router.navigate([""]).then(_=>document.location.reload());
    }


    //--------Handle the quantity inside the order--------//

  soustract(item:Quantity){
    let copy = this.items.find(element => (element.meal.id==item.meal.id)&&(element.menu.id==item.menu.id));
    if(copy){
      copy.quantity<=0?copy.quantity=0:copy.quantity=copy.quantity-1;
    }
    return copy;
  }

  add(item:Quantity){
    let copy = this.items.find(element => (element.meal.id==item.meal.id)&&(element.menu.id==item.menu.id));
    if(copy){
      copy.quantity=copy.quantity+1;
    }
    return copy;
  }

  remove(item:Quantity){
    this.cartService.removeItem(item);
    document.location.reload();
  }

  //--------Order's Action--------//

  order(){
    for(let item of this.items){
      this.orderItems.push({
        quantity: item.quantity,
        mealId: item.meal.id,
        menuId: item.menu.id
      });
    }
    this.newOrder.quantity=this.orderItems;
    //A changer pour la methode qui sera dans le services order !
    // let url = environment.apiUrl+"/order/add";
    // const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    // this.httpClient.put(url,this.newOrder,httpHeaderOption).subscribe(data=>this.newOrder=data);
  }

  clear(){
    localStorage.removeItem("cartItems");
    document.location.reload();
  }
}
