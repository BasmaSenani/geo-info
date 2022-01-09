import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  _url = "http://localhost:8081/api/v1/";


  constructor(private http:HttpClient) { }

 public getAnnonce(page:number):Observable<any[]>{
    return this.http.get<any[]>(this._url+"annonces?page="+page);
  }

  public getAnnoncePages():Observable<any>{
    return this.http.get<any>(this._url+"annoncesPages");
  
  }

  public getAnnonceByOperation(page:number,operation:string):Observable<any[]>{
    return this.http.get<any[]>(this._url+"annonces/operation/"+operation+"?page="+page);
  }
    
  public getAnnonceByType(page:number,type:string):Observable<any[]>{
    return this.http.get<any[]>(this._url+"annonces/type/"+type+"?page="+page);
  }

  public getAnnonceByCommune(page:number,commune:string):Observable<any[]>{
    return this.http.get<any[]>(this._url+"annonces/commune/"+commune+"?page="+page);
  }

  public getAllCommmunes():Observable<any[]>{
    return this.http.get<any[]>(this._url+"allCommunes");
  }

  public updateAnnonce(annonce:any,id:number){
   return this.http.put<any>(this._url+"annonces/"+id,annonce)
  }

  public getByIdInter(id:number,page:number):Observable<any[]>{
    return this.http.get<any[]>(this._url+"annonces/inter/"+id+"?page="+page);
  }


  
  
}
