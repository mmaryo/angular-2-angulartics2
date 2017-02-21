import {Component} from "@angular/core";
declare let ga: Function;

@Component({
    selector: 'mb-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor() {
        ga('send', 'event', 'INIT', 'app', 'Analytics');
    }
}
