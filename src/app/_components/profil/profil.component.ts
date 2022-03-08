import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    
  user:User = new User("",0,"","","",false,"","","","",0,0,0,0);
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let token = JSON.parse(sessionStorage.getItem('token')||"");
    let id=(sessionStorage.getItem('userId')||"");
    console.log(id);
    if(id!=null){
      this.userService.getUserById(parseInt(id)).subscribe(data=>this.user=data);
    }
  }

}
