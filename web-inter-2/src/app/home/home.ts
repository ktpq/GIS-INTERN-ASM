  import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import '@arcgis/map-components/components/arcgis-map';
  import type { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
  import Point from '@arcgis/core/geometry/Point';
  import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
  import Graphic from '@arcgis/core/Graphic';
  import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";
  import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';
import { buffer } from 'rxjs';

  @Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class Home {
    mapComponent!: ArcgisMap;
    currentBufferGeometry!: Polygon;
    arcgisViewReadyChange(event: CustomEvent) {
      // console.log('Map is ready', event);
      this.mapComponent = event.target as ArcgisMap;

      const featureLayer = new FeatureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0"
      })

      if (this.mapComponent.view.map) {
        this.mapComponent.view.map.add(featureLayer);
      }

      

      this.mapComponent.view.on("click", (event) => {
        const currentPoint = event.mapPoint as Point;

        this.addPointGraphic(currentPoint);
        this.addBufferArea(currentPoint);

        if (this.currentBufferGeometry) {
          this.spatialQuery(featureLayer, this.currentBufferGeometry);
        }
      })

    }

    spatialQuery(featureLayer: FeatureLayer, currentBufferGeometry: Polygon){
      const query = featureLayer.createQuery();
          query.geometry = currentBufferGeometry;
          query.spatialRelationship = "intersects";

          query.returnGeometry = true;
          featureLayer.queryFeatures(query).then((response) => {
            console.log("this is spatial query result :", response.features)
            const pointStyle = new SimpleMarkerSymbol({
              color: 'blue',
              style: 'diamond',
              size: 25,
              outline: {
                color: 'white',
                width: 2
              }
            })
            
            const allFeature = response.features;
            allFeature.map(feature => {
              feature.symbol = pointStyle;
            })

            this.mapComponent.view.graphics.addMany(allFeature)
          })
    }

    
    
    async addBufferArea(currentPoint: Point){
      const bufferMeters = 20000; // 20 kilometers
      const bufferUnit = "kilometers";
      const bufferGeometry = bufferOperator.execute(currentPoint, bufferMeters);

      
      const bufferStyle = new SimpleFillSymbol({
        color: [218, 156, 115, 0.2],
        outline: {
          color: 'red',
          width: 2
        }
      })

      // console.log("buffer geometry :",bufferGeometry)
      const bufferGraphic = new Graphic({
        geometry: bufferGeometry,
        symbol: bufferStyle
      })

      this.mapComponent.view.graphics.add(bufferGraphic);
      this.currentBufferGeometry = bufferGeometry as Polygon;
      
      
    }

    

    addPointGraphic(currentPoint: Point){

      // Remove existing graphics
      // this comment is from new-asm branch
      if (this.mapComponent.view.graphics.length > 0) {
        this.mapComponent.view.graphics.removeAll();
      }

      const pointStyle = new SimpleMarkerSymbol({
        color: 'orange',
        size: 40,
        outline: {
          color: 'white',
          width: 1
        }
      })

      const pointGraphic = new Graphic({
        geometry: currentPoint,
        symbol: pointStyle
      })

      console.log('currentPoint :', currentPoint)
      this.mapComponent.view.graphics.add(pointGraphic);
      
    }
  }
