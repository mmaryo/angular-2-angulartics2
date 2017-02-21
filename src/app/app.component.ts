import {Component, OnInit} from "@angular/core";
declare let ga: Function;

@Component({
    selector: 'mb-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        ga('send', 'pageview');
    }
}
