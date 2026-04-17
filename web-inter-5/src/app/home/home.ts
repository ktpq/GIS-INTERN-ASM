import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import "@arcgis/map-components/components/arcgis-layer-list";
import TileLayer from '@arcgis/core/layers/TileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

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
    // The view is ready, add additional functionality below
    console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    if (this.mapComponent){
      const oceanMap = new TileLayer({
        url: "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"
      })

      const cencusMap = new FeatureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
        outFields: ["*"],
      })

      this.mapComponent.view.map.add(oceanMap);
      this.mapComponent.view.map.add(cencusMap);

    }
  }
}
