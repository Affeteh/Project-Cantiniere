import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];

  @Input() user = {
    email: '',
    password: ''
  };

  constructor(
    private userService:  UserService
  ) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>
      this.users = data
    )
  }

  onSubmit(form:NgForm){
    let indexEmail = this.users.findIndex(data => {
      data.email == this.user.email
    })
    if(indexEmail){
      // let indexPassword = this.users.findIndex(data => {
      //   data.password == this.user.password
      // })
      sessionStorage.setItem(
        'userId',this.users[indexEmail].id.toString()
      );
    }
  }
  SignIn(){
    
  }
}
