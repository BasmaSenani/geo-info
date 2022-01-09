import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.css']
})
export class InterFormComponent implements OnInit {

  constructor(private intermediairesService: IntermediaireService , 
    private router : Router) {}
  
  isSent = false ; 
  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    this.isSent = true ; 
    f.value['roles']="ROLE_INTER"
    console.log(f.value);
    this.intermediairesService.saveInter(f.value).subscribe(
     res => console.log(res),
     err => console.log(err)   
     );
   
  }

  onClick(){
    this.router.navigate(['/'])
  }

}
