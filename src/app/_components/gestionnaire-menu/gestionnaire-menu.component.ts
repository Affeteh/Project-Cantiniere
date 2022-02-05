import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-gestionnaire-menu',
  templateUrl: './gestionnaire-menu.component.html',
  styleUrls: ['./gestionnaire-menu.component.css']
})
export class GestionnaireMenuComponent implements OnInit {

  menus: Menu[]=[];
  shownAdd: boolean =false;
  constructor(private menuService: MenuServiceService) { }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(result=>this.menus=result);
  }

  addMenu(){
    this.shownAdd=!this.shownAdd;
  }

}
