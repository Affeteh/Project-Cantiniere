import { Component, OnInit, Output } from '@angular/core';
import { Menu } from '../_models/menu';
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
  show:boolean=false;
  menuId:number=0;

  @Output() isShownedChange: any;

  constructor(private menuService:MenuServiceService) { }

  ngOnInit(): void {


    this.menuService.getMenusForToday().subscribe(result=>{

      this.MenusOfTheWeeks=result;

      for(let menu of this.MenusOfTheWeeks){

        if(menu.meals!=null){

          this.menusWeek.push({
            id:menu.id,
            description: menu.description,
            label:menu.label,
            meals:menu.meals
          })
        }
      }
    });
  }

  showDetails(Id:number){
    this.show=!this.show;
    this.menuId=Id;
  }
  changeShowValue(value:boolean){
    this.show=value;
  }
  // getWeekNumber(){
  //   let firstDayOfTheYear=new Date("01 Jan 2022");
  //   let firsDayInMiliseconde=Date.parse(firstDayOfTheYear.toDateString());
  //   let today=Date.now();
  //   let weekNumber = (today-firsDayInMiliseconde)/(7*24*60*60*1000)
  //   return Math.round(weekNumber);
  // }
}
