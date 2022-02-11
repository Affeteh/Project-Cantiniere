import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';


@Component({
  selector: 'app-gestionnaire-menu',
  templateUrl: './gestionnaire-menu.component.html',
  styleUrls: ['./gestionnaire-menu.component.css']
})
export class GestionnaireMenuComponent implements OnInit {


  @Input() menu: Menu =new Menu("","",0,0,0,[],[]) ;
  menus: Menu[]=[];
  weeks: number[]=[]
  meals: Meals[]=[]
  //variable for the table pagination//
  page: number=0;
  pageSize: number=0;
  collectionSize: number=0;
  //variable for oppening the different action component//
  shownDetail: boolean =false;
  openEdit:boolean=false;
  toDelete:boolean=false;
  menuId:number=0;
  label:string="";
  menuEdit: Menu =new Menu("","",0,0,0,[],[]);



  constructor(private menuService: MenuServiceService, private mealService: MealsService,private modalService:NgbModal) { }


  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(result=>{
      this.menus=result;
      this.collectionSize=this.menus.length;
      this.page=1;
      this.pageSize=10;
    });

    this.mealService.getAllMeals().subscribe(result=>this.meals=result);

    for(let i=1;i<=54;i++){
      this.weeks.push(i);
    };

    this.refreshMenus();

  }


  refreshMenus(){
    this.menus.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  moveTable(parameter:boolean){
    let table=document.querySelector('#menuTable');
    if(parameter){
      table?.classList.remove('col-md-10');
      table?.classList.add('col-md-6');
    }else{
      table?.classList.remove('col-md-6');
      table?.classList.add('col-md-10');
    }
  }


//Button's functions//
  openEdition(id:number){
    this.openEdit=!this.openEdit;
    this.menuService.getMenuById(id).subscribe(data=>this.menuEdit=data);
    //this.moveTable(this.openEdit);
  }
  showDetail(id:number){
    this.shownDetail=!this.shownDetail;
    this.menuId=id;
    this.moveTable(this.shownDetail);
  }
  delete(id :number){
    console.log("Inside first delete after event");
    this.toDelete=!this.toDelete;
    this.menuId=id;
    this.menuService.getMenuById(id).subscribe(data=>this.label=data.label);

  }

}
