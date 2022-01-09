import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string ="";
  role = "";
  hasAccess=false;
  authenticatedInter : any ;


   subject = new Subject();

  _url="http://localhost:8080";

  constructor(public httpClient:HttpClient , private router:Router) { }

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

  public verifyInter(token:any){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>(this._url+"/hello2", {headers, responseType: 'text' as 'json' });
  }

  public setRole(role:string){
    this.role = role;
  }

  public getRole(){
    return this.role 
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    if (this.role) {
      return this.checkAccess(this.role, allowedRoles);
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
  }

  private checkAccess(token: string, allowedRoles: string[]): boolean {
    allowedRoles.forEach(element => {
         if(token==element){
           this.hasAccess=true;
         }
         else{
           this.hasAccess=false
         }

       });
       return this.hasAccess
  }

  public setAuthInter(inter:any){
    this.authenticatedInter = inter ; 
  }

  public getInter(){
    return this.authenticatedInter ;
  }

  

}
