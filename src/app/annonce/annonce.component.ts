import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  @Input() annonce:any ; 

  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.route.navigate(['demandes/'+this.annonce.gid])
  }

}
