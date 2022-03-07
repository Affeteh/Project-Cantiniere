import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private loginurl = "http://localhost:8080/lunchtime/login";
  private logouturl = "http://localhost:8080/lunchtime/logout";
  constructor(private httpClient: HttpClient) { }


  login(user:any){
    const httpHeaderOption={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      observe:'response' as 'response'};
    let httpHeaderResponse=new HttpHeaderResponse();
    return this.httpClient.post<HttpResponse<User>>(`${this.loginurl}`,user,httpHeaderOption);

    }




}
