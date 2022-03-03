import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredients } from 'src/app/_models/ingredients';
import { Menu } from 'src/app/_models/menu';
import { Quantity } from 'src/app/_models/quantity';
import { User } from 'src/app/_models/user';
import { BasketService } from 'src/app/_services/basket.service';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-card-menu-detailled',
  templateUrl: './card-menu-detailled.component.html',
  styleUrls: ['./card-menu-detailled.component.css']
})
export class CardMenuDetailledComponent implements OnInit {

  @Input() menuId:any;
  @Input() isShowned:any;
  @Output() newShownedValue = new EventEmitter<boolean>()


  menu:Menu=new Menu("","",0,0,0,[],[]);
  meals: any[]=[];
  user:User=new User("",0,"","","",false,"","","","",0,0,0,4);
  cartItems:Quantity[]=[];

  show:boolean=false;
  stillTime:boolean=true;

  wrapper = document.createElement('div');
  
  constructor(private menuService: MenuServiceService, private mealService :MealsService, private cartService:BasketService) {}

  ngOnInit(): void {

    //Get meal's picture
    this.show=this.isShowned;
    this.menuService.getMenuById(this.menuId).subscribe(data=>{
      this.menu=data;
      for(let meal of this.menu.meals){
        this.mealService.getMealImg(meal.id).subscribe(data=>{
          this.meals.push({
            id:meal.id,
            label:meal.label,
            img:data.image64,
            ingredients:meal.ingredients,
            price:meal.priceDF
          });
        });
      }
    });

    //Get the cart
    if(localStorage.getItem("cartItems")!==null){
      this.cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]");
    }

    //Set the constraint that you can order only before 10:30 AM
    let today = new Date() ;
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if(hours==10 && minutes>30 || hours>10){
      this.stillTime=!this.stillTime;
    }
  }

  close(value:boolean){
    this.show=!value
    this.newShownedValue.emit(this.show);
  }


  //--------Cart's Action--------//

  timeOut(){
    let alertPlaceholder = document.querySelector('#AlertTimeOut');
    console.log("toto");
    console.log(alertPlaceholder);
    this.wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + "Aucune commande n'est accepté après 10:30" + '<button type="button" class="btn-close" data-bs-dismiss="alert" (click)="close(show)" aria-label="Close"></button></div>'
    alertPlaceholder?.append(this.wrapper);
  }

  addToCart(id:number){
    this.mealService.getMeal(id).subscribe(data=>{
      this.cartItems=this.cartService.addItem(new Quantity(1,data,this.menu));
    });
  }


}


