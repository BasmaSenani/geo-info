import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandesService } from '../services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  demandes:any[] =[]
  displayedColumns: string[] = ['Nom Prenom', 'Téléphone'];

  constructor(private activatedRoute:ActivatedRoute,
    private demandeService:DemandesService) { }

  ngOnInit(): void {
    this.demandeService.getDemande(+this.activatedRoute.snapshot.params.id).subscribe(
      data => {
        console.log(data)
        this.demandes = data ; 
      }
    )
  }

  onValidate(e:any){
   
  }
   
  onReject(e:any){
    
  }

}
