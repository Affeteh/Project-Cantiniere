import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MenuIn } from 'src/app/_models/menu-in';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-add-menu-modal',
  templateUrl: './add-menu-modal.component.html',
  styleUrls: ['./add-menu-modal.component.css']
})
export class AddMenuModalComponent implements OnInit {

  menus: Menu[]=[];
  weeks: Number[]=[]
  meals: Meals[]=[]

  @Input() menu: MenuIn =new MenuIn("","",0,0,0,[],[]) ;

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
      this.menu.mealIds.push(event.target.value);
     }else{
       let index =event.target.value
       if(index){
         this.menu.mealIds.splice(index,1);
       }
     }
   }

   onSubmit(form: NgForm){
     this.menuService.addMenu(this.menu).subscribe(result=>{
       this.menu=result;
       document.location.reload();
     });
   }


}
