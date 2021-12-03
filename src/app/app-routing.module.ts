import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { BodyComponent } from './body/body.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AnnoncesService } from './services/annonces.service';

const routes: Routes = [
  {path:'',component : BodyComponent},
  {path:'login',component : LoginPageComponent},
  {path:'admin',component : AdminPageComponent},
  {path:'annonces',component : AnnoncesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
