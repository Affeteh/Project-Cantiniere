import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/_models/ingredients';
import { Meals } from 'src/app/_models/meals';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { MealsService } from 'src/app/_services/meals.service';

@Component({
  selector: 'app-gestionnaire-meals',
  templateUrl: './gestionnaire-meals.component.html',
  styleUrls: ['./gestionnaire-meals.component.css']
})
export class GestionnaireMealsComponent implements OnInit {

  @Input() meal: Meals =new Meals("","",0,0,0,[],0,[]) ;
  weeks: number[]=[]
  meals: Meals[]=[]
  ingredients:Ingredients[]=[];
  //variable for the table pagination//
  page: number=0;
  pageSize: number=0;
  collectionSize: number=0;
  //variable for oppening the different action component//
  shownDetail: boolean =false;
  openEdit:boolean=false;
  toDelete:boolean=false;
  mealId:number=0;
  label:string="";
  mealEdit: Meals =new Meals("","",0,0,0,[],0,[]);



  constructor(private mealService: MealsService,private ingredientService:IngredientsService) { }

  ngOnInit(): void {

    this.mealService.getAllMeals().subscribe(result=>{
      this.meals=result;
      this.collectionSize=this.meals.length;
      this.page=1;
      this.pageSize=10;
    });

    this.ingredientService.getAllIngredient().subscribe(result=>this.ingredients=result);

    this.refreshMeals();


  }

  refreshMeals(){
    this.meals.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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

  //Button's functions//
  openEdition(id:number){
    this.openEdit=!this.openEdit;
    this.mealService.getMeal(id).subscribe(data=>this.mealEdit=data);
    //this.moveTable(this.openEdit);
  }
  showDetail(id:number){
    this.shownDetail=!this.shownDetail;
    this.mealId=id;
    this.moveTable(this.shownDetail);
  }
  delete(id :number){
    console.log("Inside first delete after event");
    this.toDelete=!this.toDelete;
    this.mealId=id;
    this.mealService.getMeal(id).subscribe(data=>this.label=data.label);

  }

}
