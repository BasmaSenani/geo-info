import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  constructor(private http:HttpClient) { }

  _url = "http://localhost:8081/api/v1";

  getDemande(idAnnonce:number):Observable<any[]>{
    return this.http.get<any[]>(this._url+"/demandes2/"+idAnnonce);
  }
  

}
