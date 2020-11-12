import { Component } from '@angular/core';

@Component ({
    selector: 'app-warningalert',
    template: `
    <p>WARN: This app is running in a development environment! {{ title }}</p>
    `,
    styles: [`
    p {
        background-color: lightyellow;
        border: 1px solid orange;
        color: red;
        padding: 20px;
    }
    `],
    //as this was a manually created component I found it easier to declare its template and style like this
})

export class WarningalertComponent {

}