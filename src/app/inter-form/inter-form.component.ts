import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intermediaire } from '../intermediaire';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.css']
})
export class InterFormComponent implements OnInit {

  intermediaire!:Intermediaire;
  constructor( private route: ActivatedRoute, 
    private router: Router, 
      private intermediareService: IntermediaireService) {
        this.intermediaire= new Intermediaire();
       }

       //
       saveEmployee(){
        this.intermediareService.createEmployee(this.intermediaire).subscribe( data =>{
          console.log(data);
          
        },
        error => console.log(error));
      }
       //
  
  onSubmit(){
    console.log(this.intermediaire);
    this.saveEmployee();
  }

  

  ngOnInit(): void { }

}
