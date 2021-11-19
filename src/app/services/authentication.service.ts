import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string ="";

   subject = new Subject();

  _url="http://localhost:8080";

  constructor(public httpClient:HttpClient) { }

  public getToken(data:any){
        return this.httpClient.post<string>(this._url+"/authenticate",data,{ responseType: 'text' as 'json'});
  }

  public setToken(token:string){
    this.token = token
    this.subject.next()
  }

  public getThisToken(){
    return "service token   "+this.token
  }

  public verifyAuthorization(token:any){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>(this._url+"/hello", {headers, responseType: 'text' as 'json' });
  }

  

}
