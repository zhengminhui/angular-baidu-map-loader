import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { loader } from './baidu-maps.loader';
import { BAIDU_MAP_STYLE } from './style';

declare const BMap: any;

@Component({
  selector: 'baidu-maps',
  templateUrl: './baidu-maps.component.html',
  styleUrls: ['./baidu-maps.component.css'],
})
export class BaiduMapsComponent implements OnInit, OnDestroy {
  @Input() apiKey: string;
  @Input() center: any;
  @Input() zoom = 7;
  mapObj: any;
  styleJson: any;
  polylineArrPoints;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.styleJson = BAIDU_MAP_STYLE;
    this.center = {
      lat: 37.08,
      lng: 119.48,
    };
    this.zoom = 11;
    this.polylineArrPoints = polylineArrPoints;
    loader(this.apiKey, this.initMap.bind(this));
  }

  initMap() {
    const container = this.elementRef.nativeElement.querySelector('.baidu-map-container');
    const map = new BMap.Map(container);
    const point = new BMap.Point(this.center.lng, this.center.lat);
    // const marker = new BMap.Marker(point);
    // marker.addEventListener('click', () => {
    //   const opts = {
    //     width: 200,
    //     height: 120,
    //     title: 'baidu map'
    //   };
    //   const msg = 'this is a marker.';
    //   const infoWindow = new BMap.InfoWindow(msg, opts);
    //   map.openInfoWindow(infoWindow, point);
    // });
    map.centerAndZoom(point, this.zoom);
    map.enableScrollWheelZoom(true);
    map.setMapStyle({
      styleJson: this.styleJson,
    });
    this.mapObj = map;
    this.addPolyline(map, this.polylineArrPoints);
  }

  addPolyline(map, polylinePoints) {
    const pointsArr = this.converToBmapPoint(polylinePoints);
    const polyline = new BMap.Polyline(pointsArr, {
      strokeColor: 'blue',
      strokeWeight: 6,
      strokeOpacity: 0.5,
    });
    const midPoint = polylinePoints[Math.ceil(polylinePoints.length / 2)];
    const point = new BMap.Point(midPoint.lng, midPoint.lat);
    polyline.addEventListener('click', () => {
      const opts = {
        width: 200,
        height: 120,
        title: 'baidu map',
      };
      const msg = 'this is a polyline.';
      const infoWindow = new BMap.InfoWindow(msg, opts);
      map.openInfoWindow(infoWindow, point);
    });
    map.addOverlay(polyline);
  }

  ngOnDestroy() {
    if (this.mapObj) {
      console.log('destroyed', this.mapObj);
      this.mapObj.clearOverlays();
    }
  }

  converToBmapPoint(rawPoints) {
    const bMapPoint = [];
    rawPoints.forEach(element => {
      const point = new BMap.Point(element.lng, element.lat);
      bMapPoint.push(point);
    });
    return bMapPoint;
  }
}

const polylineArrPoints = [
  { lat: 37.12, lng: 119.49 },
  { lat: 37.1, lng: 119.5 },
  { lat: 37.1, lng: 119.48 },
  { lat: 37.08, lng: 119.48 },
  { lat: 37.07, lng: 119.47 },
  { lat: 37.05, lng: 119.47 },
  { lat: 37.0, lng: 119.47 },
  { lat: 36.93, lng: 119.42 },
];
