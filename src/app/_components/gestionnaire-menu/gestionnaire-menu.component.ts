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

  @Input() menu: Menu =new Menu("","",0,0,0,[],[]) ;

  constructor(private menuService: MenuServiceService, private mealService: MealsService) { }


  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(result=>this.menus=result);

    this.mealService.getAllMeals().subscribe(result=>this.meals=result);

    for(let i=1;i<=54;i++){
      this.weeks.push(i);
    };

  }

  pushWeek(event:any){
   if(event.target.checked==true){
     this.menu.availableForWeeks.push(event.target.value);
   }
  }
  pushMeal(event:any){
    if(event.target.checked==true){
      this.mealService.getMeal(event.target.value).subscribe(data=>{this.menu.meals.push(data)});
    }
  }
  
  onSubmit(form: NgForm){
    console.log(this.menu);
    this.menuService.addMenu(this.menu).subscribe(result=>{
      this.menu=result;
      document.location.reload();
    });
  }

  delete(id :number){
    this.menuService.getMenuById(id).subscribe(data=>{
      this.menu=data;
      this.menuService.deleteMenu(this.menu).subscribe(_=>document.location.reload());
    });
  }
}
