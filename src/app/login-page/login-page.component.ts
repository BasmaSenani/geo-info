import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isExists = true ; 
  isAuthorized = true ; 

  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.isExists=true;
    this.authService.getToken(f.value).subscribe(
      data => {
        this.authService.setToken(data);
        this.authService.verifyAuthorization(data).subscribe(
          data =>console.log(data),
          err=> {
            this.isAuthorized=false 
          }
        )
      },
      err=> { 
        this.isExists = false ; 
      }
    )
  }

}
