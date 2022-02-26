import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/_models/ingredients';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-card-menu-detailled',
  templateUrl: './card-menu-detailled.component.html',
  styleUrls: ['./card-menu-detailled.component.css']
})
export class CardMenuDetailledComponent implements OnInit {

  @Input() menuId:any;
  @Input() isShowned:any
  menu:Menu=new Menu("","",0,0,0,[],[]);
  meals: any[]=[];
  ingredients:Ingredients[]= [];

  show:boolean=false;

  constructor(private menuService: MenuServiceService, private mealService :MealsService) { }

  ngOnInit(): void {

    this.show=this.isShowned;
    this.menuService.getMenuById(this.menuId).subscribe(data=>{
      this.menu=data;
      for(let meal of this.menu.meals){
        this.mealService.getMealImg(meal.id).subscribe(data=>{
          this.meals.push({
            label:meal.label,
            img:data.image64,
            ingredients:meal.ingredients,
            price:meal.priceDF
          });
        });
      }
    });
  }


  close(){
    this.show=!this.show;
  }
}
