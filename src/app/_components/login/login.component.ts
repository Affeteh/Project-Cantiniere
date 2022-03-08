import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];


  @Input() user={
    email:"",
    password:""
  }

  constructor(private userService:  UserService, private authService: AuthenticationService,private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(form:NgForm){
    let token;
    let jsonResult;
    this.authService.login(this.user).subscribe((res:HttpResponse<any>)=>{
      token=res.headers.get('Authorization');
      if(token!=null){
        jsonResult=this.parseJwt(token);
        sessionStorage.setItem('userId',JSON.stringify(jsonResult.user.id));
        sessionStorage.setItem('token',JSON.stringify(token));
      }
      this.router.navigateByUrl("").then(_=>document.location.reload());
    });

  }

  parseJwt(token:string){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  SignIn(){

  }
}
