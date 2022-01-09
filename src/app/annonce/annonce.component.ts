import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from '../services/annonces.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  @Input() annonce:any ; 
  isInter = false ;
  openMessage=false ;
  isReserver = false;
  authInter:any ; 

  constructor( private route:Router , 
    private authService:AuthenticationService,
    private annonceService:AnnoncesService) { }

  ngOnInit(): void {
   if(this.authService.getRole()=="inter"){
          this.isInter=true;
          this.authInter=this.authService.getInter() ; 
   }
   
  }

  onClick(){
    if(this.authService.getRole()!="inter"){
      this.route.navigate(['demandes/'+this.annonce.gid])
    }
  }

  onReserver(){
    console.log(this.annonce)
    if(!this.annonce.isReserved){
      this.isReserver = true ; 
      this.annonce.isReserved = true ; 
      this.annonce.idInter=this.authInter.id ;
      this.annonceService.updateAnnonce(this.annonce,this.annonce.gid).subscribe(
        res => console.log(res),
        err=>console.log(err)
      )
    }
    else{
      this.openMessage = true
      setTimeout(()=>{this.openMessage=false}, 2000);
    }
    
  }

  onLiberer(){
    if(this.annonce.isReserved && this.annonce.id_inter== this.authInter.id){
      this.isReserver = false ; 
      this.annonce.isReserved = false ; 
      this.annonce.idInter=0 ;
      this.annonceService.updateAnnonce(this.annonce,this.annonce.gid)
    } 
  }

}
