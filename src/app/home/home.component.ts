import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { Menu } from '../_models/menu';
import { MealsService } from '../_services/meals.service';
import { MenuServiceService } from '../_services/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  weekNumber:number=0;
  MenusOfTheWeeks:Menu[]=[];
  menusWeek:any[]=[]
  meals: any[]=[];
  menu2:any=null
  meal:any=null;

  constructor(private menuService:MenuServiceService,private mealService:MealsService) { }

  ngOnInit(): void {

    this.weekNumber=this.getWeekNumber();
    this.menuService.getMenusForTheWeek(this.weekNumber).subscribe(result=>{

      this.MenusOfTheWeeks=result;

      for(let menu of this.MenusOfTheWeeks){

        if(menu.meals!=null){
          for(let meal of menu.meals){
            this.mealService.getMealImg(meal.id).subscribe(data=>{
              this.meals.push({
                label:meal.label,
                img:data.image64
              })
            });
            console.log(this.meals)

            this.menusWeek.push({
              id:menu.id,
              description: menu.description,
              label:menu.label,
              meals:this.meals
            })
          }
        }

      }

      console.log(this.menusWeek)
    });
  }


  getWeekNumber(){
    let firstDayOfTheYear=new Date("01 Jan 2022");
    let firsDayInMiliseconde=Date.parse(firstDayOfTheYear.toDateString());
    let today=Date.now();
    let weekNumber = (today-firsDayInMiliseconde)/(7*24*60*60*1000)
    return Math.round(weekNumber);
  }
}
