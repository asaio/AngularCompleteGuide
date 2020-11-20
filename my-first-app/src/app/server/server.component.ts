import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p.online {
      background-color: palegreen;
      padding: 20px;
      border: 1px solid darkgreen;
      justify-content: center;
    }
    p.offline {
      background-color: mistyrose;
      padding: 20px;
      border: 1px solid red;
      justify-content: center;
    }
    `],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerComponent {
    serverId = 129389;
    serverStatus = 'online';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
      return this.serverStatus;
    }

    getServerId() {
      return this.serverId;
    }

    getColor() {
      return this.serverStatus == 'online' ? 'lightgreen' : 'mistyrose';
    }
}
