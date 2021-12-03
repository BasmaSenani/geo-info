import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  annonces = [
    {
      id: 1 ,
      title : "annonce1",
      description:"cet annonce est tres interessante",
      price : 200 , 
      disponibilité : true 
    } , 
    {
      id: 2 ,
      title : "annonce2",
      description:"cet annonce est tres interessante",
      price : 300 , 
      disponibilité : true 
    } , 
    {
      id: 3 ,
      title : "annonce3",
      description:"cet annonce est tres interessante",
      price : 400 , 
      disponibilité : true 
    } , 
    {
      id: 1 ,
      title : "annonce1",
      description:"cet annonce est tres interessante",
      price : 200 , 
      disponibilité : true 
    } , 
    {
      id: 2 ,
      title : "annonce2",
      description:"cet annonce est tres interessante",
      price : 300 , 
      disponibilité : true 
    } , 
    {
      id: 3 ,
      title : "annonce3",
      description:"cet annonce est tres interessante",
      price : 400 , 
      disponibilité : true 
    } , 

  ]

  constructor() { }

  getAnnonces(){
     return [...this.annonces];
  }
}
