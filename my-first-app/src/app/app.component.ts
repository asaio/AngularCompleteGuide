import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: green;
  },
  p {
    color: pink;
  }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = "Maya's Dating App";
}
