import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input() menuId:any;
  menu:Menu=new Menu("","",0,0,0,[],[]);
  meals: any[]=[];

  constructor(private menuService: MenuServiceService, private mealService :MealsService) { }

  ngOnInit(): void {

    console.log(this.menuId);
    this.menuService.getMenuById(this.menuId).subscribe(data=>{
      this.menu=data;
      for(let meal of this.menu.meals){
        this.mealService.getMealImg(meal.id).subscribe(data=>{
          this.meals.push({
            label:meal.label,
            img:data.image64
          })
        });
      }
    });
  }


}
