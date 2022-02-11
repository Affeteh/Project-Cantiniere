import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  @Input() menuId: any;

  menu:Menu=new Menu("","",0,0,0,[],[]);
  constructor(private menuService: MenuServiceService) { }

  ngOnInit(): void {

    this.menuService.getMenuById(this.menuId).subscribe(data=>{this.menu=data});


  }
}
