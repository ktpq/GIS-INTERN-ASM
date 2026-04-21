import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import "@arcgis/map-components/components/arcgis-layer-list";
import TileLayer from '@arcgis/core/layers/TileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import "@arcgis/map-components/components/arcgis-swipe";
import MapImage from '@arcgis/core/layers/support/MapImage';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './fivesix.html',
  styleUrl: './fivesix.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  mapComponent!: ArcgisMap;
  oceanMap = new TileLayer({
      url: "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"
  })

  cencusMap = new MapImageLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
  })

  streetMap = new TileLayer({
      url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"
  })
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
    console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    if (this.mapComponent && this.mapComponent.view.map) {

      


      this.mapComponent.view.map.add(this.oceanMap);
      // web-inter-5
      this.mapComponent.view.map.add(this.cencusMap);

      // web-inter-6
      // this.mapComponent.view.map.add(this.streetMap);

    }
  }
}
