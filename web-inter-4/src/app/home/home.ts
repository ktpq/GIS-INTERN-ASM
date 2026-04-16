import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import Graphic from '@arcgis/core/Graphic';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Point from '@arcgis/core/geometry/Point';
import * as route from "@arcgis/core/rest/route";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters.js";
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  mapComponent!: ArcgisMap;
  allPoint = signal<Graphic[]>([]);
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
    console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    this.mapComponent.view.on('click', (event) => {
      console.log('Map clicked at: ', event.mapPoint);
      this.addPointGraphic(event.mapPoint);
    })
  }


  findRoute(){
    const url = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NetworkAnalysis/SanDiego/NAServer/Route"
    const routeParams = new RouteParameters({
      stops: new FeatureSet({
        features: [...this.allPoint()]
      }),
      returnDirections: true,
    })
    route.solve(url, routeParams).then((response) => { console.log("route data : ",response) })
  }
  addPointGraphic(mapPoint: Point){
    let pointStyle = null;
      if (this.allPoint().length === 0) {
        pointStyle = new SimpleMarkerSymbol({
          color: 'blue',
          size: 10,
          outline: {
            color: 'white',
            width: 1,
          },
        });
      } else {
        pointStyle = new SimpleMarkerSymbol({
          color: 'red',
          size: 10,
          outline: {
            color: 'white',
            width: 1,
          },
        });
      }
        
      const pointGraphic = new Graphic({
        geometry: mapPoint,
        symbol: pointStyle,
      })

      this.mapComponent.view.graphics.add(pointGraphic);
      this.allPoint.update((points) => [...points, pointGraphic]);
      console.log("this is array of allPoint",this.allPoint)
  }

  clearAllPoints(){
    this.allPoint.set([]);
    this.mapComponent.view.graphics.removeAll();
  }
}
