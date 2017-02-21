import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {PromoComponent} from "./promo/promo.component";
import {Angulartics2Module} from "angulartics2";

@NgModule({
    declarations: [
        HomeComponent,
        PromoComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild([{path: '', component: HomeComponent}]),
        Angulartics2Module.forChild(),
    ],
    exports: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule {
}
