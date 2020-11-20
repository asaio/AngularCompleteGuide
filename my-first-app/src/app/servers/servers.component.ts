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
  userName = "";
  serversListAlt = false;
  serversList = [];

  constructor() {
      setTimeout(() => {
        this.allowRemoveServer = true;
      }, 5000); 
  }

  ngOnInit() {

  }

  onAddServer() {
      this.serverCreationStatus = `Server ${this.serverName} added to servers list`;
      this.serversList.push(this.serverName);
      this.serversListAlt = true;
  }

  onRemoveServer() {
      this.serverCreationStatus = `Server ${this.serverName} removed from servers list`;
      for (let i = 0; i < this.serversList.length; i++) {
        if (this.serversList[i] === this.serverName) {
          this.serversList.splice(i,1);
          break;
        }
      }
      this.serversListAlt = true;
  }

  onUpdateServerName(event: Event) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
      this.userName = "";
  }
}
