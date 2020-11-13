import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p {
      background-color: palegreen;
      padding: 20px;
      border: 1px solid darkgreen;
      justify-content: center;
    }
    `],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerComponent {
    serverId = 129389;
    serverStatus = 'online';

    getServerStatus() {
      return this.serverStatus;
    }

    getServerId() {
      return this.serverId;
    }

}
