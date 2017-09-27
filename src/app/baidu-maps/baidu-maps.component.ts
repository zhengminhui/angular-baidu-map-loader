import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { loader } from './baidu-maps.loader';

declare const BMap: any;

@Component({
  selector: 'baidu-maps',
  templateUrl: './baidu-maps.component.html',
  styleUrls: ['./baidu-maps.component.css']
})
export class BaiduMapsComponent implements OnInit, OnDestroy {
  @Input() apiKey: string;
  @Input() center: any = {
    lat: 22,
    lng: 122,
  };
  @Input() zoom = 7;
  mapObj: any;
  styleJson: any;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.styleJson = baidu_style;
    loader(this.apiKey, this.initMap.bind(this));
  }

  initMap() {
    const container = this.elementRef.nativeElement.querySelector('.baidu-map-container');
    const map = new BMap.Map(container);
    const point = new BMap.Point(this.center.lng, this.center.lat);
    const marker = new BMap.Marker(point);
    marker.addEventListener('click', () => {
      const opts = {
        width: 200,
        height: 120,
        title: 'baidu map',
      };
      const msg = 'this is a marker.';
      const infoWindow = new BMap.InfoWindow(msg, opts);
      map.openInfoWindow(infoWindow, point);
    })
    map.centerAndZoom(point, this.zoom);
    map.enableScrollWheelZoom(true);
    map.setMapStyle({
      styleJson: this.styleJson,
    });
    map.addOverlay(marker);
    this.mapObj = map;
  }

  ngOnDestroy() {
    if (this.mapObj) {
      console.log('destroyed' , this.mapObj);
      this.mapObj.clearOverlays();
    }
  }

}

const baidu_style = [
  {
            featureType: 'land',
            elementType: 'geometry',
            stylers: {
                      color: '#212121'
            }
  },
  {
            featureType: 'building',
            elementType: 'geometry',
            stylers: {
                      color: '#2b2b2b'
            }
  },
  {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
                      lightness: -42,
                      saturation: -91
            }
  },
  {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
                      lightness: -77,
                      saturation: -94
            }
  },
  {
            featureType: 'green',
            elementType: 'geometry',
            stylers: {
                      color: '#1b1b1b'
            }
  },
  {
            featureType: 'water',
            elementType: 'geometry',
            stylers: {
                      color: '#181818'
            }
  },
  {
            featureType: 'subway',
            elementType: 'geometry.stroke',
            stylers: {
                      color: '#181818'
            }
  },
  {
            featureType: 'railway',
            elementType: 'geometry',
            stylers: {
                      lightness: -52
            }
  },
  {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: {
                      color: '#313131'
            }
  },
  {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: {
                      color: '#8b8787'
            }
  },
  {
            featureType: 'manmade',
            elementType: 'geometry',
            stylers: {
                      color: '#1b1b1b'
            }
  },
  {
            featureType: 'local',
            elementType: 'geometry',
            stylers: {
                      lightness: -75,
                      saturation: -91
            }
  },
  {
            featureType: 'subway',
            elementType: 'geometry',
            stylers: {
                      lightness: -65
            }
  },
  {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
                      lightness: -40
            }
  },
  {
            featureType: 'boundary',
            elementType: 'geometry',
            stylers: {
                      color: '#8b8787',
                      weight: '1',
                      lightness: -29
            }
  },
  {
            featureType: 'label',
            elementType: 'all',
            stylers: {
                      visibility: 'off'
            }
  }
];
