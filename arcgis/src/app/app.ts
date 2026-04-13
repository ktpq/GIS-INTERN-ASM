import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import '@arcgis/map-components/components/arcgis-map';
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';

import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-layer-list';
import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-scale-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  mapComponent!: ArcgisMap;
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
    console.log('Map is ready', event);
    // เก็บตัวแแปร mapComponent ไว้ใช้งานต่อไป
    this.mapComponent = event.target as ArcgisMap;

    
    this.mapComponent.view.on('click', (event) => {
      console.log('Clicked', event);
      this.mapComponent.view.goTo(event.mapPoint);
    });

  }


}
