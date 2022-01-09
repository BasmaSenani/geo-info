import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { BodyComponent } from './body/body.component';
import { DemandesComponent } from './demandes/demandes.component';
import { InterFormComponent } from './inter-form/inter-form.component';
import { InterPageComponent } from './inter-page/inter-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MapComponent } from './map/map.component';
import { AuthenticationService } from './services/authentication.service';



const routes: Routes = [
  {path:'',component : BodyComponent},
  {path:'login',component : LoginPageComponent},
  {path:'admin',
  component : AdminPageComponent,
  canActivate: [AuthenticationService],
  data: {
    allowedRoles: ['admin']
  }
},
  {path:'inter',
  component : InterPageComponent ,
  canActivate: [AuthenticationService],
  data: {
    allowedRoles: ['inter']
  }},
  {path:'annonces',component : AnnoncesComponent},
  {path:'signup',component : InterFormComponent},
  {path:'map',component : MapComponent},
  {path:"demandes/:id",component:DemandesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
