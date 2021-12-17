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
  

 

   subject = new Subject();

  _url="http://localhost:8080";
  private baseURL = "http://localhost:8080/intermediaires";

  constructor(public httpClient:HttpClient) { }

  public getInter():Observable<any[]>{
    return this.httpClient.get<any[]>(this._url+"/intermediaires");
  }

  //list inter
  public findAll(): Observable<Intermediaire[]> {
    return this.httpClient.get<Intermediaire[]>(this._url+"/intermediaires");
  }
  //
  //create
  createEmployee(inter: Intermediaire): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, inter);
  }

  
 


}
