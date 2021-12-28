import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'; 
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RightsReservedComponent } from './rights-reserved/rights-reserved.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceComponent } from './annonce/annonce.component';

import { MapComponent } from './map/map.component';
import { InterFormComponent } from './inter-form/inter-form.component';
import { AnnoncesService } from './services/annonces.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RightsReservedComponent,
    AnnoncesComponent,
    AnnonceComponent,
    MapComponent,
    InterFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    
  ],
  providers: [AnnoncesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
