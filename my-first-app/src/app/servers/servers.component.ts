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

  allowRemoveServer = false;
  serverCreationStatus = "Servers list unchanged"
  serverName = "";
  
  constructor() {
    setTimeout(() => {
      this.allowRemoveServer = true;
    }, 5000);
  }

  ngOnInit() {

  }

  onAddServer() {
      this.serverCreationStatus = "Server added to servers list"
  }

  onRemoveServer() {
      this.serverCreationStatus = "Server removed from servers list"
  }

  onUpdateServerName(event: Event) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
