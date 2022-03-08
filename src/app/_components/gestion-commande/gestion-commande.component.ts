import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { User } from 'src/app/_models/user';
import { CommandesService } from 'src/app/_services/commandes.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.css']
})
export class GestionCommandeComponent implements OnInit {

  orders: Order[]=[];
  users: User[]=[];
  page: number=0;
  pageSize: number=0;
  collectionSize: number=0;

  constructor(private orderService: CommandesService, private userService: UserService) {}

  ngOnInit(): void {
    this.orderService.getAll().subscribe(data=>{
      this.orders=data;
      this.collectionSize=this.orders.length;
      this.page=1;
      this.pageSize=10;
    });

    this.userService.getAllUsers().subscribe(data=>this.users=data);
    this.refreshOrders();
  }


  refreshOrders(){
    this.orders.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  validate(id: number){
    this.orderService.deliverAndPaieOrder(id).subscribe(_=>document.location.reload())
  }

  cancel(id:number){
    this.orderService.cancelOrder(id).subscribe(_=>document.location.reload());
  }

  orderByuser(){
    let inputValue = document.querySelector<HTMLInputElement>('#search')?.value;
    let index = this.users.findIndex(x=> x.name.toLowerCase()===inputValue?.toLowerCase());
    this.orderService.getallOrderForUser(this.users[index].id).subscribe(result=>this.orders=result);

  }
}
