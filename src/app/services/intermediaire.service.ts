import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IntermediaireService {

   subject = new Subject();

  _url="http://localhost:8080";

  constructor(public httpClient:HttpClient) { }

  public getInter():Observable<any[]>{
    return this.httpClient.get<any[]>(this._url+"/intermediaires");
  }


}
