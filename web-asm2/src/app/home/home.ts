import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import { identify } from "@arcgis/core/rest/identify";
import IdentifyParameters from "@arcgis/core/rest/support/IdentifyParameters.js";
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import { signal } from '@angular/core';

import '@arcgis/map-components/components/arcgis-map';
import { Locator } from '../components/locator/locator';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
@Component({
  selector: 'app-home',
  imports: [Locator],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  mapComponent!: ArcgisMap;
  currentPoint = signal<Point>(new Point())
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
    console.log('Map is ready', event);

    // เก็บค่าไว้ช้งานในภายหลัง
    this.mapComponent = event.target as ArcgisMap;
    const mapImageLayer = new MapImageLayer({
      url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer"
    });

    mapImageLayer.when(() => {
      console.log("🎉 MapImageLayer โหลดข้อมูลเสร็จแล้ว!");
      console.dir(mapImageLayer.sublayers);
    });

    this.mapComponent.map?.add(mapImageLayer);

    // ทำงานเมื่อคลิกบนแผนที่
    this.mapComponent.view.on('click', (event) => {
        
        console.log('Map clicked at: ', event);
        const point = event.mapPoint as Point;

        // เพิ่มกราฟิกจุดบนแผนที่ เเละ update currentPoint
        // this.addPointGraphic(point);
        // เรียกใช้ identify task เพื่อหาข้อมูลของพื้นที่ที่คลิก
        this.identifyTask(point);
        

        

    })

 }

  // ฟังก์ชันสำหรับเพิ่มกราฟิกจุดบนแผนที่ เเละ update currentPoint  
    addPointGraphic(point: Point){
      const marker = new SimpleMarkerSymbol({
          color: 'red',
          outline: {
            color: 'white',
            width: 1
          }
        })

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: marker
        })

        this.mapComponent.view.graphics.add(pointGraphic);
        this.currentPoint.set(point)
        console.log('Current point set to: ', this.currentPoint())
    }

    identifyTask(point: Point){
      const identifyUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer";
        const params = new IdentifyParameters({
          width: this.mapComponent.view.width,
          height: this.mapComponent.view.height,
          geometry: point,
          mapExtent: this.mapComponent.view.extent,
          layerIds: [3],
          returnGeometry: true,
          tolerance: 5
        })



        identify(identifyUrl, params).then((response:any) => {
          const results = response.results; 
          console.log('Identify results: ', results);
          
          this.mapComponent.view.graphics?.removeAll();
          this.mapComponent.view.popup?.close();
          console.log("1")
          this.addPointGraphic(point);
          console.log("2")
          if (results.length > 0) {
            const feature = results[0].feature;

            const fillSymbol = new SimpleFillSymbol({
              color: [51, 51, 204, 0.4],
              outline: {
                color: "white",
                width: 2
              }
            });

            const polygonGraphic = new Graphic({
              geometry: feature.geometry,
              symbol: fillSymbol
            });

            this.mapComponent.view.graphics.add(polygonGraphic);

            this.mapComponent.view.popup?.open({
              title: feature.attributes.STATE_NAME,
              content: `
                <b>ประชากรปี 2007:</b> ${feature.attributes.POP2007} คน<br><br>
                <b>ขนาดพื้นที่:</b> ${feature.attributes.Shape_Area} ตารางหน่วย
              `, 
              location: point
            });
          }
        })
    }
    gotoLocation(point: Point){
        console.log('goto location', point);
        this.identifyTask(point);
    }
}
