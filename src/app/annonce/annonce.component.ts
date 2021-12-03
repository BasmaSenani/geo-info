import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  @Input() annonce:any ; 

  constructor() { }

  ngOnInit(): void {
  }

}
