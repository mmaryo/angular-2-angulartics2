import "./polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {AppModule} from "./app/app.module";
import {Environments} from "./environments/environments";

if (environment.name == Environments.prod) {
    enableProdMode();
}

let env = environment;

platformBrowserDynamic().bootstrapModule(AppModule);
