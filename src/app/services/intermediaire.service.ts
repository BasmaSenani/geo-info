import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntermediaireService {

  _url="http://localhost:8080/intermediaires";

  constructor(public httpClient:HttpClient) { }

  public getInter():Observable<any[]>{
    return this.httpClient.get<any[]>(this._url);
  }

  
  public saveInter (data:any){
    return this.httpClient.post<any>(this._url,data);
  }
  
    
  
  
    
    
}

  

 
 

  
 


