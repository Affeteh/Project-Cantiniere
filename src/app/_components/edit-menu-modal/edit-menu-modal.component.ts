import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MenuIn } from 'src/app/_models/menu-in';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-edit-menu-modal',
  templateUrl: './edit-menu-modal.component.html',
  styleUrls: ['./edit-menu-modal.component.css']
})
export class EditMenuModalComponent implements OnInit {

@Input() menu:any;

menus: Menu[]=[];
weeks: number[]=[];
meals: Meals[]=[];
mealsId:number[]=[];
mealsCopy:Meals[]=[];
menuBis:Menu=new Menu("","",0,0,0,[],[]);
menu2:MenuIn=new MenuIn("","",0,0,[],[]);

constructor(private menuService: MenuServiceService, private mealService: MealsService) { }

ngOnInit(): void {
  console.log("dans edit modal on init");
  for(let i=1;i<=54;i++){
    this.weeks.push(i);
  }

  this.menuBis=this.menu;

  this.mealService.getAllMeals().subscribe(result=>{
      this.meals=result;
      this.mealsCopy=result; //To have a list of meals without the ones in the menu

      for(let meal of this.menuBis.meals){
        this.mealsId.push(meal.id);
      };

      //To have the right type of meal for the service (API)
      this.menu2={
        id:this.menuBis.id,
        label:this.menuBis.label,
        description:this.menuBis.description,
        status:this.menuBis.status,
        availableForWeeks:this.menuBis.availableForWeeks,
        priceDF:this.menuBis.priceDF,
        mealIds:this.mealsId
      };


      //To get the list of unchosen meal
      for(let meal of this.menuBis.meals){
        let ind=this.meals.findIndex(x=>x.label==meal.label);
        if(ind){
          this.mealsCopy.splice(ind,1);
        }
      }
      //to set the checked parameter for the checkbox
      let divWeeks=document.querySelector('#divWeeks');
      if(divWeeks){
        let inputWeeks=divWeeks.querySelectorAll('input');
        if(inputWeeks){
          if(inputWeeks!=null&&inputWeeks!=undefined){
            for (let i=0;i<=inputWeeks.length;i++){
              if(inputWeeks[i]!=undefined){

                let x= this.menuBis.availableForWeeks.find(data => data.toString()==inputWeeks[i].getAttribute('value'));
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
