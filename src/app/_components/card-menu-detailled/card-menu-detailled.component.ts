import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredients } from 'src/app/_models/ingredients';
import { Meals } from 'src/app/_models/meals';
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
  ingredients:Ingredients[]= [];
  user:User=new User("",0,"","","",false,"","","","",0,0,0,4);
  show:boolean=false;

  constructor(private menuService: MenuServiceService, private mealService :MealsService, private cartService:BasketService) { }

  ngOnInit(): void {

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

  }


  close(value:boolean){
    this.show=!value
    this.newShownedValue.emit(this.show);
  }

  addToCart(id:number){
    let menu:Menu;
    let meal:Meals;
    console.log(this.menuId);
    this.menuService.getMenuById(this.menuId).subscribe(data=>menu=data);
    this.mealService.getMeal(id).subscribe(data=>{
      meal=data;
      this.cartService.addItem(new Quantity(1,meal,menu));
    });
  }
}
