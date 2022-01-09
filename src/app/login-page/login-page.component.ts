import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isExists = true ; 
  isAuthorized = true ; 

  constructor(public authService:AuthenticationService,
    public router:Router, private interSerice:IntermediaireService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.isExists=true;
    this.authService.getToken(f.value).subscribe(
      data => {
        this.authService.setToken(data);
        this.authService.verifyAuthorization(data).subscribe(
          data =>{
            console.log(data)
            this.authService.setRole("admin")
            this.router.navigate(['/admin'])
          },
          err=> {
            this.authService.verifyInter(data).subscribe(
              data=>{
                console.log(data)
                this.authService.setRole("inter")
                this.interSerice.getInterByUsername(f.value.username).subscribe(
                  data => {
                    console.log(data);
                    this.authService.setAuthInter(data);
                  },
                  err=>console.log(err)
                )
                this.router.navigate(['/inter'])
              },
              err=>{
                this.isAuthorized = false ; 
              }
            )
          }
        )
      },
      err=> { 
        this.isExists = false ; 
      }
    )
  }

}
