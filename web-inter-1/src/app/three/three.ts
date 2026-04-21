import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewChild, ElementRef } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map'; // map component
import { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import "@arcgis/map-components/dist/components/arcgis-sketch";
import '@arcgis/map-components/components/arcgis-sketch';
import type { ArcgisSketch } from '@arcgis/map-components/components/arcgis-sketch';
import { on } from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';
import { ArcgisSketchCustomEvent } from '@arcgis/map-components';
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-sketch";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './three.html',
  styleUrl: './three.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class Home {

  mapComponent!: ArcgisMap;
  featureLayer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2"
  })

  @ViewChild('sketchRef') sketchElement!: ElementRef;
  currentSelectId = -1;
  arcgisViewReadyChange(event: CustomEvent) {
    //console.log('Map is ready', event);
    this.mapComponent = event.target as ArcgisMap;

    const viewElement = document.querySelector("arcgis-map");
    console.log('viewElement', viewElement)

    viewElement?.map

    const sketch = document.querySelector("arcgis-sketch");
    console.log('sketch', sketch)

    
    

    if (this.mapComponent.view.map){
      this.mapComponent.view.map.add(this.featureLayer);
    }

    // let graphicLayer = new GraphicsLayer();

    // if (this.mapComponent.view.map) {
    //   this.mapComponent.view.map.add(graphicLayer);
    //   console.log("add Graphic Layer เเล้ว")
    // }
    this.mapComponent.view.on("click", async (event) => {
        const currentPoint = event.mapPoint as Point;

        const response = await this.mapComponent.view.hitTest(event);
        const results = response.results.filter((r: any) => r.layer === this.featureLayer);
        
        // กดโดน graphic ใน feature
        if (results.length > 0){
          // const sketch = document.querySelector('.sketch') as ArcgisSketch;
          // sketch.update()
          // console.log(results[0])
          
          // sketch?.triggerUpdate(results[0])


          
          
          
        }

    })

    


    


  }


  onSketchReady(event: CustomEvent){
    //console.log("Sketch Ready: ", event)
  }
  onSketchCreate(event: CustomEvent){
    if (event.detail.state === "complete"){
      // 🟢 1. เก็บตัว graphic ที่เพิ่งวาดเสร็จไว้ในตัวแปร
      const drawnGraphic = event.detail.graphic; 
      const geometry = drawnGraphic.geometry;
      
      console.log('วาดเสร็จแล้ว', geometry);

      const featureStyle = new SimpleFillSymbol({
        color: 'blue',
        outline: {
          color: 'white',
          width: 2
        }
      });
      
      const newFeature = new Graphic({
        geometry: geometry,
        symbol: featureStyle,
        attributes: {
          symbolid: 1,
          description: "new feature"
        }
      });

      this.featureLayer.applyEdits({
        addFeatures: [newFeature]
      }).then((response) => {
        console.log("New Feature Response : ", response);
        
        setTimeout(() => {
          if (drawnGraphic.layer) {
            drawnGraphic.layer.remove(drawnGraphic);
            console.log("ลบรูปสเก็ตช์ชั่วคราวออกแล้ว!");
          } 

        }, 1000);

      })

    }
  }

  onSketchUpdate(event: CustomEvent){

  }

  onSketchDelete(event: CustomEvent){
    
  }


  // onSketchUpdate(event: CustomEvent){
  //   const geometry = event.detail.graphics[0].geometry;
  //   if (event.detail.state === "start"){
  //     this.spatialQuery(geometry)
  //   } else if (event.detail.state = "complete"){

  //     const featureStyle = new SimpleFillSymbol({
  //       color: 'blue',
  //       outline: {
  //         color: 'white',
  //         width: 2
  //       }
  //     })

  //     const updateFeature = new Graphic({
  //       geometry: geometry,
  //       symbol: featureStyle,
  //       attributes: {
  //         objectid: this.currentSelectId,
  //         description: "update feature"
  //       }
  //     })
  //     this.featureLayer.applyEdits({
  //       updateFeatures: [updateFeature]
  //     })
  //   }
  // }

  // onSketchDelete(event: CustomEvent){
  //   // console.log("Delete Event: ", event)
  //   this.featureLayer.applyEdits({
  //     deleteFeatures: [{objectId: this.currentSelectId}]
  //   }).then((response) => {
  //     console.log("Delete object response", response)
  //   })
  // }


  // spatialQuery(geometry: Polygon){
  //   const query = this.featureLayer.createQuery();
  //   query.outFields = ["objectId"];
  //   query.geometry = geometry
    
  //   this.featureLayer.queryFeatures(query).then((response) => {
  //     console.log("Query Response : ", response.features[0].attributes.objectid)
  //     this.currentSelectId = response.features[0].attributes.objectid
  //   })
  // }


}