import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

import '@arcgis/map-components/components/arcgis-sketch';
import type { ArcgisSketch } from '@arcgis/map-components/components/arcgis-sketch';
import { on } from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class Home {

  mapComponent!: ArcgisMap;
  featureLayer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2"
  })
  currentUpdateId = -1;
  arcgisViewReadyChange(event: CustomEvent) {
    console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    // let graphicLayer = new GraphicsLayer();

    // if (this.mapComponent.view.map) {
    //   this.mapComponent.view.map.add(graphicLayer);
    //   console.log("add Graphic Layer เเล้ว")
    // }

    


    


  }

  onSketchCreate(event: CustomEvent){
    if (event.detail.state === "complete"){
      const geometry = event.detail.graphic.geometry;
      console.log('วาดเสร็จแล้ว', geometry)

      const featureStyle = new SimpleFillSymbol({
        color: 'blue',
        outline: {
          color: 'white',
          width: 2
        }
      })
      
      const newFeature = new Graphic({
        geometry: geometry,
        symbol: featureStyle,
        attributes: {
          symbolid: 1,
          description: "new feature"
        }
      })

      this.featureLayer.applyEdits({
        addFeatures: [newFeature]
      }).then((response) => {
        console.log("New Feature Response : ", response)
      })

    }
  }

  onSketchUpdate(event: CustomEvent){
    const geometry = event.detail.graphics[0].geometry;
    if (event.detail.state === "start"){
      this.spatialQuery(geometry)
    } else if (event.detail.state = "complete"){

      const featureStyle = new SimpleFillSymbol({
        color: 'blue',
        outline: {
          color: 'white',
          width: 2
        }
      })

      const updateFeature = new Graphic({
        geometry: geometry,
        symbol: featureStyle,
        attributes: {
          objectid: this.currentUpdateId,
          description: "update feature"
        }
      })
      this.featureLayer.applyEdits({
        updateFeatures: [updateFeature]
      })
    }
  }


  spatialQuery(geometry: Polygon){
    const query = this.featureLayer.createQuery();
    query.outFields = ["objectId"];
    query.geometry = geometry
    
    this.featureLayer.queryFeatures(query).then((response) => {
      console.log("Query Response : ", response.features[0].attributes.objectid)
      this.currentUpdateId = response.features[0].attributes.objectid
    })
  }
}