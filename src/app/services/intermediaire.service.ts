import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Intermediaire } from '../intermediaire';



@Injectable({
  providedIn: 'root'
})
export class IntermediaireService {

  intermediairesSubject = new Subject<any[]>();
  //
  //
  private users: Intermediaire[] = [];
  userSubject = new Subject<Intermediaire[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: Intermediaire) {
    this.users.push(user);
    this.emitUsers();
  }
  //

 

   subject = new Subject();

  _url="http://localhost:8080";

  constructor(public httpClient:HttpClient) { }

  public getInter():Observable<any[]>{
    return this.httpClient.get<any[]>(this._url+"/intermediaires");
  }

  public saveInter(interm:Intermediaire) {
    return this.httpClient.post<string>(this._url+"/intermediaires", interm);
  }

  public  addInterm(firstname: string, lastname: string,telephone: string,username: string,password: string,adresse: string,ville_RC: string,N_RC: string,gerant_name: string,commune1: string,commune2: string,commune3: string,email: string) {
    
   //const inter= new Intermediaire(firstname, lastname,telephone,username,password,adresse,ville_RC,N_RC,gerant_name,commune1,commune2,commune3,email); 
   //this.addUser(inter); 
   //this.saveInter(inter); 
   //this.saveIntermtoserver(inter);
    
    
}

  saveIntermtoserver(interm:Intermediaire){
    this.httpClient.post<Intermediaire>(this._url+"/intermediaires", interm).subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


}
