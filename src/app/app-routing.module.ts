import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './_components/cart/cart.component';
import { GestionUserComponent } from './_components/gestion-user/gestion-user.component';
import { LoginComponent } from './_components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'panier',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:GestionUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
