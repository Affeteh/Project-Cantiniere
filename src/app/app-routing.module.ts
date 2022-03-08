import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardMenuComponent } from './_components/card-menu/card-menu.component';
import { CartComponent } from './_components/cart/cart.component';
import { GestionUserComponent } from './_components/gestion-user/gestion-user.component';
import { GestionnaireMenuComponent } from './_components/gestionnaire-menu/gestionnaire-menu.component';
import { InscriptionComponent } from './_components/inscription/inscription.component';
import { LoginComponent } from './_components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'panier',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:GestionUserComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'WIP',component:GestionnaireMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
