import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {

  users: User[]=[];
  usersBis:any[]=[]
  userDetail:User=new User("",0,"","","",false,"","","","",0,0,0,0);

  page: number=0;
  pageSize: number=0;
  collectionSize: number=0;

  open:boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(result=>{
      this.users=result;
      this.collectionSize=this.users.length;
      this.page=1;
      this.pageSize=15;

      for(let user of this.users){
        this.userService.getImgUser(user.id).subscribe(img=>{
          this.usersBis.push({
            id:user.id,
            name:user.name,
            firstname:user.firstname,
            img: img.image64
          })
        })
      }
    });

    this.refreshUsers();
  }

  refreshUsers(){
    this.users.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  setUser(id:number){
    this.userService.getUserById(id).subscribe(user=> this.userDetail=user);
    this.open=!this.open;
  }

}
