import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  
private url =`${environment.apiUrl}/order`;
  

  constructor(private http: HttpClient) { }

  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }

  getallOrderForUser(id:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}/findallforusertoday/${id}`);
  }
}
