import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './_components/profil/profil.component';
import { GestionUserComponent } from './_components/gestion-user/gestion-user.component';
import { GestionnaireMenuComponent } from './_components/gestionnaire-menu/gestionnaire-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddMenuModalComponent } from './_components/add-menu-modal/add-menu-modal.component';
import { DeleteMenuModalComponent } from './_components/delete-menu-modal/delete-menu-modal.component';
import { DetailMenuComponent } from './_components/detail-menu/detail-menu.component';
import { EditMenuModalComponent } from './_components/edit-menu-modal/edit-menu-modal.component';
import { GestionnaireMealsComponent } from './_components/gestionnaire-meals/gestionnaire-meals.component';
import { AddMealModalComponent } from './_components/add-meal-modal/add-meal-modal.component';
import { DeleteMealModalComponent } from './_components/delete-meal-modal/delete-meal-modal.component';
import { EditMealModalComponent } from './_components/edit-meal-modal/edit-meal-modal.component';
import { DetailMealComponent } from './_components/detail-meal/detail-meal.component';
import { CardMenuComponent } from './_components/card-menu/card-menu.component';
import { CardMenuDetailledComponent } from './_components/card-menu-detailled/card-menu-detailled.component';
import { CartComponent } from './_components/cart/cart.component';
import { DetailledUserModalComponent } from './_components/detailled-user-modal/detailled-user-modal.component';
import { LoginComponent } from './_components/login/login.component';
import { InscriptionComponent } from './_components/inscription/inscription.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { GestionCommandeComponent } from './_components/gestion-commande/gestion-commande.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    GestionUserComponent,
    GestionnaireMenuComponent,
    AddMenuModalComponent,
    DeleteMenuModalComponent,
    DetailMenuComponent,
    EditMenuModalComponent,
    GestionnaireMealsComponent,
    AddMealModalComponent,
    DeleteMealModalComponent,
    EditMealModalComponent,
    DetailMealComponent,
    CardMenuComponent,
    CardMenuDetailledComponent,
    CartComponent,
    DetailledUserModalComponent,
    LoginComponent,
    InscriptionComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    GestionCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
