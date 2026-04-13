import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <router-outlet>
  `,
  styleUrl: './app.css',
})
export class App {

  

}
