import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/_services/basket.service';
import { Quantity } from 'src/app/_models/quantity';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { Router } from '@angular/router';
import { QuantityIn } from 'src/app/_models/quantity-in';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

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
  user: User=new User("",0,"","","",false,"","","","",0,0,0,2);

  //Ici il faut remplacer le type Any par le type "OrderIn" du OrderDTOIn dans le back
  //C'est cette commande qu'on enverra en bdd
  newOrder:any= {
    userId:4, // Il faut récupérer l'id du user grâce à la navBar car il sera authentifié (le user peut être dans une session storage)
    constraintId:-1,
    quantity:[]};

  constructor(private cartService:BasketService,
    private router:Router,
    private httpClient :HttpClient,//sera remplacé par le service des commandes
    private userService: UserService
    ) { }

  ngOnInit(): void {

    //Get the cart (persisted values)
    if(localStorage.getItem("cartItems")!==null){
      this.items=JSON.parse(localStorage.getItem("cartItems") || "[]");
    }
    //Get the user from the session storage
    if(sessionStorage.getItem("userId")!==null){
      this.newOrder.userId=parseInt(JSON.parse(sessionStorage.getItem("userId")||""))
      this.userService.getUserById(this.newOrder.userId).subscribe(data=>this.user=data);
    }

    //Set the constraint that you can order only before 10:30 AM
    let today = new Date() ;
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if(hours==10 && minutes>30 || hours>10){
      this.stillTime=!this.stillTime;
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
    // 
    this.clear()
  }

  clear(){
    localStorage.removeItem("cartItems");
    document.location.reload();
  }
}
