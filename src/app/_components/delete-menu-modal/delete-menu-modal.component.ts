import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-delete-menu-modal',
  templateUrl: './delete-menu-modal.component.html',
  styleUrls: ['./delete-menu-modal.component.css']
})
export class DeleteMenuModalComponent implements OnInit {

  @Input() menuId:any
  @Input() menuLabel:any;

  menu: Menu =new Menu("","",0,0,0,[],[]);

  constructor(private menuService: MenuServiceService) { }

  ngOnInit(): void {
    console.log("inside delete");
    this.menuService.getMenuById(this.menuId).subscribe(data=>{this.menu=data});
  }


  delete(){
    console.log("toto");
    console.log(this.menuId);
    this.menuService.getMenuById(this.menu.id).subscribe(data=>{
      this.menu=data;
      this.menuService.deleteMenu(this.menu).subscribe(_=>document.location.reload());
    });
  }
}
