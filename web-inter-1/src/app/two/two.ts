  import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, Signal } from '@angular/core';
  import '@arcgis/map-components/components/arcgis-map';
  import type { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
  import Point from '@arcgis/core/geometry/Point';
  import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
  import Graphic from '@arcgis/core/Graphic';
  import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";
  import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
  import Polygon from '@arcgis/core/geometry/Polygon';
  import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
  import * as closestFacility from '@arcgis/core/rest/closestFacility';
  import ClosestFacilityParameters from '@arcgis/core/rest/support/ClosestFacilityParameters';
  import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
  import {NgClass} from '@angular/common';

  @Component({
    selector: 'app-home',
    imports: [NgClass],
    templateUrl: './two.html',
    styleUrl: './two.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class Home {
    mapComponent!: ArcgisMap;
    currentBufferGeometry!: Polygon;
    currentPoint!: Point;
    tenPlace = signal<Graphic[]>([]);
    currentName = signal<String>("");
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
        this.currentPoint = event.mapPoint as Point;

        this.addPointGraphic(this.currentPoint);
        this.addBufferArea(this.currentPoint);

        if (this.currentBufferGeometry) {
          this.spatialQuery(featureLayer, this.currentBufferGeometry);
        }
      })

    }

    setCurrentName(name: string) {
    this.currentName.set(name);

    this.mapComponent.view.graphics.forEach((graphic: any) => {
      
      if (graphic.geometry.type === "polyline" && graphic.attributes['Name']) {
        const isSelected = graphic.attributes['Name'] === name;
        graphic.symbol = new SimpleLineSymbol({
          color: isSelected ? [34, 197, 94, 1] : [0, 0, 0, 1], 
          width: isSelected ? 2 : 2,
          style: "solid"
        });

        if (isSelected) {
          this.mapComponent.view.graphics.remove(graphic);
          this.mapComponent.view.graphics.add(graphic);
        }
      }
    });
  }

    closetFacilityQuery(spatialResult: Graphic[]) {
      const url = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NetworkAnalysis/SanDiego/NAServer/ClosestFacility";
      console.log("spatialResult :", spatialResult)
      closestFacility.solve(url,
        new ClosestFacilityParameters({
          incidents: new FeatureSet({
            features: [new Graphic({
              geometry: this.currentPoint,
              attributes: { Name: 'Current Location' }
            })],
          }),
          facilities: new FeatureSet({
            features: [...spatialResult],
          }),
          returnRoutes: true,
          defaultTargetFacilityCount: 10,
        }), null
      ).then((response: any) => { 
        
        if (response.routes && response.routes.features.length > 0) {
          
          const routeSymbol = new SimpleLineSymbol({
            color: 'black', 
            width: 3
          });
  
          const routeGraphics = response.routes.features.map((feature: Graphic) => {
            feature.symbol = routeSymbol;
            const routeName = feature.attributes['Name'];
            if (routeName && routeName.includes(' - ')) {
              feature.attributes['Name'] = routeName.split(' - ')[1].trim();
            }

            return feature;
          });
  
          this.mapComponent.view.graphics.addMany(routeGraphics);
          
          this.tenPlace.set(routeGraphics);
  
        } else {
          console.warn("ไม่พบเส้นทางถนน อาจจะอยู่นอกพื้นที่ให้บริการของ San Diego Network");
          this.tenPlace.set([]); 
        }
        
      }).catch((error) => {
        console.error("เกิดข้อผิดพลาดในการคำนวณเส้นทาง: ", error);
        this.tenPlace.set([]); 
      });
    }


    
    // query and draw graphics in buffer on the map
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
              size: 17,
              outline: {
                color: 'white',
                width: 2
              }
            })
            
            const allFeature = response.features;
            allFeature.map(feature => {
              feature.symbol = pointStyle;
              const cityName = feature.attributes['areaname'] || "unknown";
              feature.attributes['Name'] = cityName;
            })
            
            console.log("allFeature :", allFeature)
            this.closetFacilityQuery(allFeature)
            this.mapComponent.view.graphics.addMany(allFeature)
          })
    }

    
    
    addBufferArea(currentPoint: Point){
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
        size: 25,
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
