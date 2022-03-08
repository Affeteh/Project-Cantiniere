import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User = new User("",0,"","","",false,"","","","",0,0,0,0);

  constructor(private userService:UserService, private auhtService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {

    let id=(sessionStorage.getItem('userId')||"");
    if(id!=null){
      this.userService.getUserById(parseInt(id)).subscribe(data=>
        this.user=data);
    }
  }


  logout(){
    this.auhtService.logout(this.user).subscribe(_=>{
        sessionStorage.clear();
        this.router.navigateByUrl("").then(_=>document.location.reload());
    })
  }
}
