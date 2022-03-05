import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Image } from '../_models/image';
import { UserIn } from '../_models/user-in';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl+"/user";
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.url}/findall`);
  }

  getUserById(id:number): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.url}/find/${id}`);
  }

  getImgUser(id:number): Observable<Image[]>{
    return this.httpClient.get<Image[]>(`${this.url}/findimg/${id}`);
  }

  add(user:UserIn): Observable<UserIn>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.put<UserIn>(`${this.url}/register`,user,httpHeaderOption);
  }

  updateUser(user :UserIn):Observable<UserIn>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.patch<UserIn>(`${this.url}/update/${user.id}`,user,httpHeaderOption);
  }

  deleteUser(user:User):Observable<User>{
    return this.httpClient.delete<User>(`${this.url}/delete/${user.id}`);
  }

  desactivateUser(user:User):Observable<User>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.patch<User>(`${this.url}/desactivate/${user.id}`,user,httpHeaderOption);
  }

  creditUser(user:User):Observable<User>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post<User>(`${this.url}/credit/${user.id}`,user,httpHeaderOption);
  }

  debitUser(user:User):Observable<User>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post<User>(`${this.url}/delete/${user.id}`,user,httpHeaderOption);
  }

  activateUser(user:User):Observable<User>{
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.patch<User>(`${this.url}/activate/${user.id}`,user,httpHeaderOption);
  }
}
