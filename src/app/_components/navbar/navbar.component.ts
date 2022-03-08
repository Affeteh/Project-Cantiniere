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

  constructor(private userServie:UserService, private auhtService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {

    let token = JSON.parse(sessionStorage.getItem('token')||"");
    let id=(sessionStorage.getItem('userId')||"");
    console.log(id);
    if(id!=null){
      this.userServie.getUserById(parseInt(id)).subscribe(data=>this.user=data);
    }
  }


  logout(){
    this.auhtService.logout(this.user).subscribe(_=>{
        sessionStorage.removeItem('userId');
        //document.location.reload()
        this.router.navigateByUrl("/");
    })
  }
}
