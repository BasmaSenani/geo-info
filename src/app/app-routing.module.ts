import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { BodyComponent } from './body/body.component';
import { DemandesComponent } from './demandes/demandes.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MapComponent } from './map/map.component';
import { AnnoncesService } from './services/annonces.service';
import { SignUpIntermComponent } from './sign-up-interm/sign-up-interm.component';


const routes: Routes = [
  {path:'',component : BodyComponent},
  {path:'login',component : LoginPageComponent},
  {path:'admin',component : AdminPageComponent},
  {path:'annonces',component : AnnoncesComponent},
  {path:'signup',component : SignUpIntermComponent},
  {path:'map',component : MapComponent},
  {path:"demandes/:id",component:DemandesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
