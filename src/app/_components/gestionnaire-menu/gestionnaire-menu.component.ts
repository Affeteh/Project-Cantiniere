import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';
@Component({
  selector: 'app-gestionnaire-menu',
  templateUrl: './gestionnaire-menu.component.html',
  styleUrls: ['./gestionnaire-menu.component.css']
})
export class GestionnaireMenuComponent implements OnInit {

  menus: Menu[]=[];
  weeks: Number[]=[]
  meals: Meals[]=[]


  constructor(private menuService: MenuServiceService, private mealService: MealsService) { }


  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(result=>this.menus=result);

    this.mealService.getAllMeals().subscribe(result=>this.meals=result);

    for(let i=1;i<=54;i++){
      this.weeks.push(i);
    };

  }

  onSubmit(form: NgForm){}
}
