import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MenuIn } from 'src/app/_models/menu-in';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  @Input() menuId: any;

  menus: Menu[]=[];
  weeks: number[]=[];
  meals: Meals[]=[];
  mealsId:number[]=[];
  mealsCopy:Meals[]=[];
  menu:Menu=new Menu("","",0,0,0,[],[]);
  menu2:MenuIn=new MenuIn("","",0,0,0,[],[]);
  isSelected:boolean=false;

  constructor(private menuService: MenuServiceService, private mealService: MealsService) { }

  ngOnInit(): void {
    for(let i=1;i<=54;i++){
            this.weeks.push(i);}
    this.menuService.getMenuById(this.menuId).subscribe(data=>{
      this.menu=data;
    console.log(this.menu)});
    this.mealService.getAllMeals().subscribe(result=>{
        this.meals=result;
        this.mealsCopy=result;
        for(let meal of this.menu.meals){
          this.mealsId.push(meal.id);
        }
        this.menu2={
          id:this.menu.id,
          label:this.menu.label,
          description:this.menu.description,
          status:this.menu.status,
          imageId:this.menu.imageId,
          availableForWeeks:this.menu.availableForWeeks,
          priceDF:this.menu.priceDF,
          mealIds:this.mealsId
        };
        for(let meal of this.menu.meals){
          let ind=this.meals.findIndex(x=>x.label==meal.label);
          if(ind){
            this.mealsCopy.splice(ind,1);
          }
        }
        let divWeeks=document.querySelector('#divWeeks');
        if(divWeeks){
          let inputWeeks=divWeeks.querySelectorAll('input');
          if(inputWeeks){
            if(inputWeeks!=null&&inputWeeks!=undefined){
              for (let i=0;i<=inputWeeks.length;i++){
                if(inputWeeks[i]!=undefined){

                  let x= this.menu.availableForWeeks.find(data=> data.toString()==inputWeeks[i].getAttribute('value'));
                  if(x){
                    inputWeeks[i].checked=true;
                  }
                }
              }
            }
          };
        }
      });



  }


  pushWeek(event:any){
    if(event.target.checked==true){
      this.menu2.availableForWeeks.push(parseInt(event.target.value));
    }else{
      let index = this.menu2.availableForWeeks.findIndex(x=>x==event.target.value);
      if(index==0){
        this.menu2.availableForWeeks.shift();
      }else{
        this.menu2.availableForWeeks.splice(index,1);
      }
    }
    console.log(this.menu.availableForWeeks);
   }
   pushMeal(event:any){
    if(event.target.checked==true){
      this.menu2.mealIds.push(parseInt(event.target.value));
     }else{
       let index = this.menu2.mealIds.findIndex(x=>x==parseInt(event.target.value));
       console.log(index);
       if(index==0){
         this.menu2.mealIds.shift();
       }else{
        this.menu2.mealIds.splice(index,1);
       }
     }
     console.log(this.menu2.mealIds);
   }

   onSubmit(form: NgForm){
     console.log(this.menu2);
     this.menuService.updateMenu(this.menu2).subscribe(result=>{
       this.menu2=result;
       document.location.reload();
     });
   }


}
