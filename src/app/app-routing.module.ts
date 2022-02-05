import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionnaireMenuComponent } from './_components/gestionnaire-menu/gestionnaire-menu.component';

const routes: Routes = [
  {path:'menu', component: GestionnaireMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
