import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Menu } from '../_models/menu';
import { Observable } from 'rxjs';
import { Image } from '../_models/image';
import { MenuIn } from '../_models/menu-in';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {


  private url = environment.apiUrl+"/menu";

  constructor(private httpClient: HttpClient) { }

  getAllMenus(): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.url}/findall`);
  }

  getMenusForToday():Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.url}/findallavailablefortoday`);
  }

  getMenusForTheWeek(weekNumber: Number):Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.url}/findallavailableforweek/${weekNumber}`);
  }

  getMenuImg(menuId:number):Observable<Image>{
    return this.httpClient.get<Image>(`${this.url}/findimg/${menuId}`);
  }

  getMenuById(id:number): Observable<Menu>{
    return this.httpClient.get<Menu>(`${this.url}/find/${id}`);
  }

  addMenu(menu: MenuIn){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.put<MenuIn>(`${this.url}/add`,menu,httpHeaderOption);
  }


  updateMenu(menu:MenuIn){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.patch<MenuIn>(`${this.url}/update/${menu.id}`,menu,httpHeaderOption);
  }

  deleteMenu(menu:Menu){
    return this.httpClient.delete<Menu>(`${this.url}/delete/${menu.id}`);
  }
}
