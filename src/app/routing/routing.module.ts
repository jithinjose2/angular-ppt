import { NgModule } from "@angular/core";
import {RoutingComponent} from "./routing.component";
import {childRoutes} from "./child.routing";
import {Page1Component} from "./page1.component";
import {Page2Component} from "./page2.component";

@NgModule({
    declarations: [
        RoutingComponent,
        Page1Component,
        Page2Component
    ],
    imports: [childRoutes]
})
export class RoutingModule {}