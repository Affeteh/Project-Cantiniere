import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  @Input() menuId: any;
  @Input() isOpen: any;

  menu:Menu=new Menu("","",0,0,0,[],[]);
  meals: any[]=[];

  constructor(private menuService: MenuServiceService, private mealService :MealsService) { }

  ngOnInit(): void {

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

  goBack(){
    this.isOpen=!this.isOpen;
    this.moveTable(false);
  }

  moveTable(parameter:boolean){
    let table=document.querySelector('#menuTable');
    if(parameter){
      table?.classList.remove('col-md-10');
      table?.classList.add('col-md-6');
    }else{
      table?.classList.remove('col-md-6');
      table?.classList.add('col-md-10');
    }
  }
}
