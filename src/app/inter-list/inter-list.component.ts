import { Component, OnInit } from '@angular/core';
import { Intermediaire } from '../intermediaire';
import { IntermediaireService } from '../services/intermediaire.service';

@Component({
  selector: 'app-inter-list',
  templateUrl: './inter-list.component.html',
  styleUrls: ['./inter-list.component.css']
})
export class InterListComponent implements OnInit {

  intermediaires!: Intermediaire[];
  constructor(private interService : IntermediaireService) { }

  ngOnInit(): void {

    this.interService.findAll().subscribe(data => {
      this.intermediaires = data;
    });
  }

}
