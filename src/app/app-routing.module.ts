import {NgModule} from "@angular/core";
import {Routes, Route, RouterModule, PreloadingStrategy} from "@angular/router";
import {Observable} from 'rxjs/Rx';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/components/home/home.module#HomeModule',
        data: {preload: true}
    }
];

export class PreloadSelectedModulesList implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data['preload'] ? load() : Observable.of(null);
    }
}

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {preloadingStrategy: PreloadSelectedModulesList}
    )],
    exports: [RouterModule],
    providers: [PreloadSelectedModulesList]
})
export class AppRoutingModule {
}
