import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.css']
})
export class InterFormComponent implements OnInit {

  constructor(private intermediairesService: IntermediaireService) {}
  

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
  
    f.value['roles']="ROLE_INTER"
    console.log(f.value);
    this.intermediairesService.saveInter(f.value).subscribe(
     res => console.log(res),
     err => console.log(err)   
     );
   
   
}

}
