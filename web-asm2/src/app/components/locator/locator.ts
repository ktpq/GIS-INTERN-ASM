import { Component, input, Output, EventEmitter, effect } from '@angular/core'; // 1. เพิ่ม effect ตรงนี้
import Point from '@arcgis/core/geometry/Point';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-locator',
  imports: [FormsModule],
  templateUrl: './locator.html',
  styleUrl: './locator.css',
})
export class Locator {
  @Output() locate = new EventEmitter<Point>();
  currentPoint = input<Point>(); 

  longInput: number | string = '';
  laInput: number | string = '';

  constructor() {
    effect(() => {
      const pt = this.currentPoint();
      
      if (pt) { // ถ้าคลิกแผนที่แล้วมีค่าส่งมา
        // ให้เอาค่าพิกัด ไปยัดใส่ตัวแปรที่ผูกกับ Input ทันที
        this.longInput = pt.longitude ?? '';
        this.laInput = pt.latitude ?? '';
      }
    });
  }

  sendLocation(){
    const targetPoint = new Point({
      longitude: Number(this.longInput),
      latitude: Number(this.laInput),
      spatialReference: { wkid: 4326 }
    });
    console.log("targetPoint before emit", targetPoint)
    this.locate.emit(targetPoint);
  }
}