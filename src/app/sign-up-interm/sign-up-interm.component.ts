import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-sign-up-interm',
  templateUrl: './sign-up-interm.component.html',
  styleUrls: ['./sign-up-interm.component.css']
})
export class SignUpIntermComponent implements OnInit {

  
  constructor(private intermediairesService: IntermediaireService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
  
    f.value['roles']="ROLE_INTER"
    console.log(f.value);
    this.intermediairesService.saveInter(f.value).subscribe(
     res => console.log(res),
     err => console.log(err)   
     );
   
   
}

}
