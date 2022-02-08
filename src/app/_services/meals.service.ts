import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../_models/image';
import { Meals } from '../_models/meals';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private url = environment.apiUrl+"/meal";

  constructor(private httpClient: HttpClient) { }


  getAllMeals(): Observable<Meals[]>{
    return this.httpClient.get<Meals[]>(this.url+"/findall");
  }

  getMenuImg(imgId:number):Observable<Image>{
    return this.httpClient.get<Image>(`${this.url}/findimg/${imgId}`);
  }
}
