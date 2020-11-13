import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers', /*html element <app-servers></app-servers>*/
  //selector: '[app-servers]', /*html attribute <div app-server></div>*/
  //selector: '.app-servers', /* css class assignment with leading . */
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServersComponent {

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

}