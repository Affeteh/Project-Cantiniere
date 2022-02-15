import { Component, Input, OnInit } from '@angular/core';
import { Meals } from 'src/app/_models/meals';
import { MealsService } from 'src/app/_services/meals.service';

@Component({
  selector: 'app-delete-meal-modal',
  templateUrl: './delete-meal-modal.component.html',
  styleUrls: ['./delete-meal-modal.component.css']
})
export class DeleteMealModalComponent implements OnInit {

  @Input() mealId:any
  @Input() mealLabel:any;

  meal:Meals=new Meals("","",0,0,0,[],0,[]);

  constructor(private mealService:MealsService) { }

  ngOnInit(): void {
    this.mealService.getMeal(this.mealId).subscribe(data=>this.meal=data);
  }

  delete(){
    this.mealService.deleteMeal(this.meal).subscribe(_=>document.location.reload());
  }

}
