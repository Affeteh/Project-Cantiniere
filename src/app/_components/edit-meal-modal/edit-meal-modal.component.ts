import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from 'src/app/_models/ingredients';
import { MealIn } from 'src/app/_models/meal-in';
import { Meals } from 'src/app/_models/meals';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { MealsService } from 'src/app/_services/meals.service';

@Component({
  selector: 'app-edit-meal-modal',
  templateUrl: './edit-meal-modal.component.html',
  styleUrls: ['./edit-meal-modal.component.css']
})
export class EditMealModalComponent implements OnInit {

  @Input() meal:any;
  meals: Meals[]=[];
  weeks: number[]=[];
  ingredients: Ingredients[]=[];
  ingredientsIds:number[]=[];
  ingredientsCopy: Ingredients[]=[];
  mealBis:Meals=new Meals("","",0,0,0,[],0,[]);
  meal2:MealIn=new MealIn("","",0,0,[],0,[]);

  constructor(private mealService:MealsService,private ingredientService:IngredientsService) { }

  ngOnInit(): void {

    for(let i=1;i<=54;i++){
      this.weeks.push(i);
    }

    this.mealBis=this.meal;

    this.ingredientService.getAllIngredient().subscribe(result=>{
        this.ingredients=result;
        this.ingredientsCopy=result; //To have a list of meals without the ones in the menu

        for(let ingredient of this.mealBis.ingredients){
          this.ingredientsIds.push(ingredient.id);
        };

        //To have the right type of meal for the service (API)
        this.meal2={
          id:this.mealBis.id,
          label:this.mealBis.label,
          description:this.mealBis.description,
          status:this.mealBis.status,
          availableForWeeks:this.mealBis.availableForWeeks,
          priceDF:this.mealBis.priceDF,
          category:this.mealBis.category,
          ingredientsId:this.ingredientsIds
        };


        //To get the list of unchosen meal
        for(let ingredient of this.mealBis.ingredients){
          let ind=this.ingredients.findIndex(x=>x.label==ingredient.label);
          if(ind){
            this.ingredientsCopy.splice(ind,1);
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

                  let x= this.mealBis.availableForWeeks.find(data => data.toString()==inputWeeks[i].getAttribute('value'));
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
      this.meal.availableForWeeks.push(event.target.value);
    }
   }
   pushIngredient(event:any){
    if(event.target.checked==true){
      this.meal.ingredientsId.push(event.target.value);
     }else{
       let index =event.target.value
       if(index){
         this.meal.ingredientsId.splice(index,1);
       }
     }
   }

   onSubmit(form: NgForm){
     this.mealService.addMeal(this.meal2).subscribe(result=>{
       this.meal2=result;
       document.location.reload();
     });
   }
}
