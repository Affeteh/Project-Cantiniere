import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from 'src/app/_models/ingredients';
import { MealIn } from 'src/app/_models/meal-in';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { MealsService } from 'src/app/_services/meals.service';

@Component({
  selector: 'app-add-meal-modal',
  templateUrl: './add-meal-modal.component.html',
  styleUrls: ['./add-meal-modal.component.css']
})
export class AddMealModalComponent implements OnInit {

  weeks:number[]=[];
  ingredients:Ingredients[]=[]

  @Input() meal:MealIn =new MealIn("","",0,0,[],0,[]);

  constructor(private mealService:MealsService,private ingredientService:IngredientsService) { }

  ngOnInit(): void {
    this.ingredientService.getAllIngredient().subscribe(result=>this.ingredients=result);

    for(let i=1;i<=54;i++){
      this.weeks.push(i);
    };
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
     this.mealService.addMeal(this.meal).subscribe(result=>{
       this.meal=result;
       document.location.reload();
     });
   }

}
