import {Component, OnInit, Renderer} from "@angular/core";
import {environment} from "environments/environment";
import {Router} from "@angular/router";
import {Angulartics2} from "angulartics2";
declare let ga: Function;

@Component({
    selector: 'mb-promo',
    templateUrl: 'promo.component.html',
    styleUrls: ['promo.component.scss']
})
export class PromoComponent implements OnInit {

    env: Object = environment;

    constructor(protected router: Router,
                protected renderer: Renderer,
                protected ngtics: Angulartics2
    ) {
    }

    ngOnInit() {
    }

    submit() {
        ga('send', 'event', 'Submit', 'Home', 'MANUAL');
        this.ngtics.eventTrack.next({
            action: 'Submit',
            properties: {
                category: 'Home',
                label: "ngtics"
            }
        });
        console.log("submit")
    }

}
