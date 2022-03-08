import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './_components/cart/cart.component';
import { GestionUserComponent } from './_components/gestion-user/gestion-user.component';
import { GestionnaireMealsComponent } from './_components/gestionnaire-meals/gestionnaire-meals.component';
import { GestionnaireMenuComponent } from './_components/gestionnaire-menu/gestionnaire-menu.component';
import { LoginComponent } from './_components/login/login.component';
import { ProfilComponent } from './_components/profil/profil.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'panier',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:GestionUserComponent},
  {path:'profil',component:ProfilComponent},
  {path:'menus',component:GestionnaireMenuComponent},
  {path:'plats',component:GestionnaireMealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
