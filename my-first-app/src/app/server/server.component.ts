import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p {
      color: red;
    }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerComponent {

}
