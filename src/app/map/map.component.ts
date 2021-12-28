import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as g from 'leaflet-geoserver-request';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  private centroid: L.LatLngExpression = [33.5731, -7.5898]; //casa ° N, ° W

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });
    this.map.invalidateSize();

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=FCeL40bYh1RFKM3lkEpp', {
      
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(this.map);

    const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
    L.marker([33.5731, -7.5898]).addTo(this.map);

    // create 5 random jitteries and add them to map
    
    

    //
    
    var test = L.tileLayer.wms("http://localhost:8080/geoserver/ehtp/wfs", {
      layers: 'ehtp:Communes',
      format: 'image/png',

      transparent: true,
      attribution: 'test'
  });
    test.addTo(this.map);
    var wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/ehtp/wms', {
    layers: 'ehtp:AXE_VOIE'
}).addTo(this.map);

    
  
  }



  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}
