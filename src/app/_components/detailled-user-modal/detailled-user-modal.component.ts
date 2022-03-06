import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-detailled-user-modal',
  templateUrl: './detailled-user-modal.component.html',
  styleUrls: ['./detailled-user-modal.component.css']
})
export class DetailledUserModalComponent implements OnInit {

  @Input() user:any;
  userbis: User=new User("",0,"","","",false,"","","","",0,0,0,0)
  fullUser:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userbis=this.user;

    this.userService.getImgUser(this.userbis.id).subscribe(img=>{
      this.fullUser={
        user:this.userbis,
        img:img.image64
      }
    })
  }

  changeStatus(user:User){
    console.log(user);
    if(this.fullUser.user.status==0){
      this.userService.desactivateUser(user).subscribe(result=> this.fullUser.user=result);
    }else{
      this.userService.activateUser(user).subscribe(result=>this.fullUser.user=result);
    }
  }

}
