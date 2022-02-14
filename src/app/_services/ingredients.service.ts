import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../_models/image';
import { Ingredients } from '../_models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private hhtpClient : HttpClient) { }

  private url = environment.apiUrl+"/ingredient";

  getAllIngredient():Observable<Ingredients[]>{
    return this.hhtpClient.get<Ingredients[]>(`${this.url}/findall`);
  }

  getIngredientById(id:number):Observable<Ingredients>{
    return this.hhtpClient.get<Ingredients>(`${this.url}/find/${id}`);
  }

  getIngredientImg(id:number):Observable<Image>{
    return this.hhtpClient.get<Image>(`${this.url}/findimg/${id}`);
  }
}
