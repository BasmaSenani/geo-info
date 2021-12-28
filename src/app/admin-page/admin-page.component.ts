import { Component, OnInit } from '@angular/core';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  intermediaires:any[] =[]
  displayedColumns: string[] = ['username', 'commune1', 'commune2','commune3'];

  constructor(public interService:IntermediaireService) { }

  ngOnInit(): void {
    this.interService.getInter().subscribe(
      data=> {
        this.intermediaires = data
        console.log(this.intermediaires)
      }

    )
  }
   
  onValidate(e:any){
   
  }
   
  onReject(e:any){
    
  }


}
