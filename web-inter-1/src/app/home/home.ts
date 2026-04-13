import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map';
import type { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';

import { NgClass } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  mapComponent!: ArcgisMap;
  allData = signal<Graphic[]>([]);
  selectedObjectId =  signal<number | null>(null);
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
    this.mapComponent = event.target as ArcgisMap;

    const featureLayer = new FeatureLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2'
    })


    if (this.mapComponent.map){
      this.mapComponent.map.add(featureLayer);
    }
    
    const query = featureLayer.createQuery();
    query.where = '1=1';
    query.outFields = ['*'];
    query.returnGeometry = true;
    
    featureLayer.queryFeatures(query).then((response) => {
      console.log("Test query: ",response.features[0].attributes);
      this.allData.set(response.features);
    });

  }

  changeLocationTo(feature: Graphic) {
    console.log("CHANGE LOCATION TO:", feature.geometry)
    if (this.mapComponent.view.graphics.length > 0) {
      this.mapComponent.view.graphics.removeAll()
    }
    this.selectedObjectId.set(feature.attributes.objectid);
    console.log("current id", this.selectedObjectId());
    const polygonStyle = new SimpleFillSymbol({
      color: [229, 160, 111, 0.7],
      // outline: {
      //   color: 'red',
      //   width: 2
      // }
    })

    const polygonGraphic = new Graphic({
      geometry: feature.geometry,
      symbol: polygonStyle
    })

    // const polygon = feature.geometry as Polygon;
    // const centerPoint = polygon.centroid;

    this.mapComponent.view.graphics.add(polygonGraphic);
    if (feature.geometry && feature.geometry.extent) {
      
      const myExpandedExtent = feature.geometry.extent.clone().expand(1.5);
      this.mapComponent.view.goTo({
        target: myExpandedExtent 
      });
      
    }
    
  }

 
}
