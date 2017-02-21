import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {Angulartics2Module, Angulartics2GoogleAnalytics, Angulartics2Facebook, Angulartics2Mixpanel} from "angulartics2";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Angulartics2Module.forRoot([
            Angulartics2GoogleAnalytics
        ]),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
