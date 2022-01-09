import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  Url = "http://localhost:8081/api/v1/annonces";

  constructor(private http:HttpClient) { }

  makeMarkers(map:L.Map){

    this.http.get(this.Url).subscribe((res:any)=>{
      for(const c of res){
        const lat = c.x;
        const lon = c.y;
        const marker = L.marker([lon,lat]).addTo(map);
        marker.bindPopup('<b>Prix:</b>' + c.prix +
            '</br> <b>description: </b>' + c.description +
          '</br> <b>Longitude:</b>' + c.x + '</br> <b>Latitude:</b>' + c.y +
            '</br> <img src="'/* + this.annonces[i].photo  +*/ +'" ' + 'style=" width: 50px;' + ' height: 50px;"  />'
          ).openPopup();

      }

    });
  }


}
