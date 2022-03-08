import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { OrderIn } from '../_models/order-in';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

private url =`${environment.apiUrl}/order`;


  constructor(private http: HttpClient) { }

  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}/findall`);
  }

  getallOrderForUser(id:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}/findallforuser/${id}`);
  }

  addOrder(order: OrderIn){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put(`${this.url}/add`,order,httpHeaderOption);
  }

  cancelOrder(id:number){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.patch(`${this.url}/cancel/${id}`,null,httpHeaderOption);
  }

  deliverAndPaieOrder(id:number){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.patch(`${this.url}/deliverandpay/${id}/-1`,null,httpHeaderOption);
  }
}
