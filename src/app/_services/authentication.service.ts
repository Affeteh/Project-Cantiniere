import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 //By default, spring security use the endpoint /login to perform authentication
  private loginurl = `${environment.apiUrl}/login`;
  private logouturl = `${environment.apiUrl}/logout`;
  constructor(private httpClient: HttpClient) { }


  login(user:any){
    const httpHeaderOption={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      observe:'response' as 'response'};
    return this.httpClient.post<HttpResponse<User>>(`${this.loginurl}`,user,httpHeaderOption);
    }

    logout(user:any){
      const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.httpClient.post<HttpResponse<User>>(`${this.logouturl}`,user,httpHeaderOption);
    }


}
