import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserIn } from 'src/app/_models/user-in';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  @Input() user:UserIn= new UserIn(0,"","",0,"","","",false,"","","","",0,{def:false,image64:"",imagePath:"",id:0});
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    this.userService.add(this.user).subscribe(result=>{
      this.user=result;
      sessionStorage.setItem('userId',JSON.stringify(this.user.id));
      this.router.navigateByUrl('');
    });
  }
}
