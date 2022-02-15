import { Component, Input, OnInit } from '@angular/core';
import { Meals } from 'src/app/_models/meals';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { MealsService } from 'src/app/_services/meals.service';

@Component({
  selector: 'app-detail-meal',
  templateUrl: './detail-meal.component.html',
  styleUrls: ['./detail-meal.component.css']
})
export class DetailMealComponent implements OnInit {

  @Input() mealId: any;
  @Input() isOpen: any;

  ingredients:any[]=[];
  meal:Meals =new Meals("","",0,0,0,[],0,[]);

  constructor(private mealService:MealsService,private ingredientService:IngredientsService) {}

  ngOnInit(): void {

    console.log(this.mealId);
    this.mealService.getMeal(parseInt(this.mealId)).subscribe(data=>{
      this.meal=data;
      for(let ingredient of this.meal.ingredients){
        this.ingredientService.getIngredientImg(ingredient.id).subscribe(data=>{
          this.ingredients.push({
            label:ingredient.label,
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
    let table=document.querySelector('#mealTable');
    if(parameter){
      table?.classList.remove('col-md-10');
      table?.classList.add('col-md-6');
    }else{
      table?.classList.remove('col-md-6');
      table?.classList.add('col-md-10');
    }
  }

}
