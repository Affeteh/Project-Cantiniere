import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../_models/image';
import { MealIn } from '../_models/meal-in';
import { Meals } from '../_models/meals';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private url = environment.apiUrl+"/meal";

  constructor(private httpClient: HttpClient) { }


  getAllMeals(): Observable<Meals[]>{
    return this.httpClient.get<Meals[]>(`${this.url}/findall`);
  }

  getMeal(id:number):Observable<Meals>{
    return this.httpClient.get<Meals>(`${this.url}/find/${id}`);
  }
  getMealImg(mealId:number):Observable<Image>{
    return this.httpClient.get<Image>(`${this.url}/findimg/${mealId}`);
  }

  addMeal(meal : MealIn):Observable<MealIn>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.put<MealIn>(`${this.url}/add`,meal,httpHeaderOption);
  }

  updateMeal(meal :MealIn):Observable<MealIn>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.patch<MealIn>(`${this.url}/update/${meal.id}`,meal,httpHeaderOption);
  }

  deleteMeal(meal:Meals):Observable<Meals>{
    return this.httpClient.delete<Meals>(`${this.url}/delete/${meal.id}`);
  }
}
