import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserIn } from 'src/app/_models/user-in';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  
  @Input() user:UserIn= new UserIn(0,"","",0,"","","",false,"","","","",0,{def:false,image64:"",imagePath:"",id:0}); 
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    this.userService.add(this.user).subscribe(result=>{
      this.user=result;
      document.location.reload();
    });
  }
}
