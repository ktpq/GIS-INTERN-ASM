import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

import '@arcgis/map-components/components/arcgis-sketch';
import type { ArcgisSketch } from '@arcgis/map-components/components/arcgis-sketch';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class Home {

  mapComponent!: ArcgisMap;
  arcgisViewReadyChange(event: CustomEvent) {
    console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    let graphicLayer = new GraphicsLayer();

    if (this.mapComponent.view.map) {
      this.mapComponent.view.map.add(graphicLayer);
    }

    
    const sketchElement = document.querySelector(".sketch") as ArcgisSketch;
    if (sketchElement) {
        sketchElement.layer = graphicLayer;
        sketchElement.availableCreateTools = ["polygon"];
    }


  }

}