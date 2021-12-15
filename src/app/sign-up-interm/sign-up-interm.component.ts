import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Intermediaire } from '../intermediaire';
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

  onSubmit(form: NgForm) {
    const firstname = form.value['firstname'];
    const lastname = form.value['lastname'];
    const email = form.value['email'];
    const telephone  = form.value['telephone'];
    const username = form.value['username'];
    const password = form.value['password'];
    const adresse = form.value['adresse'];
    const ville_RC = form.value['ville_RC'];
    const N_RC = form.value['N_RC'];
    const gerant_name = form.value['gerant_name'];
    const commune1 = form.value['commune1'];
    const commune2 = form.value['commune2'];
    const commune3 = form.value['commune3'];
    const inter=new Intermediaire(firstname, lastname, telephone, username, password, adresse, ville_RC, N_RC, gerant_name, commune1, commune2, commune3, email);

    console.log(inter);
    this.intermediairesService.saveIntermtoserver(inter);
    //this.intermediairesService.addInterm(firstname, lastname, telephone, username, password, adresse, ville_RC, N_RC, gerant_name, commune1, commune2, commune3, email);
    
    
    
}

}
