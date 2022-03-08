import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenHttpInterceptorService implements HttpInterceptor {

  //This service is used to send back the token to the API REST
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let httpRequest = req;

    const token = window.sessionStorage.getItem('token');

    if(token){
      httpRequest=req.clone({headers:req.headers.append('Authorization',token)});
    }

    return next.handle(httpRequest);
  }
}

export const tokenInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptorService, multi: true }
];
