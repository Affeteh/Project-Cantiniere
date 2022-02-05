import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './_components/profil/profil.component';
import { GestionUserComponent } from './_components/gestion-user/gestion-user.component';
import { GestionnaireMenuComponent } from './_components/gestionnaire-menu/gestionnaire-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    GestionUserComponent,
    GestionnaireMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
