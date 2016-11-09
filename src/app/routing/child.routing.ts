import { Routes, RouterModule } from "@angular/router";
import {RoutingComponent} from "./routing.component";
import {Page1Component} from "./page1.component";
import {Page2Component} from "./page2.component";

const CHILD_ROUTES: Routes = [
    { path: '', component: RoutingComponent, children: [
        { path: '', component: Page1Component },
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component }
    ]}
];

export const childRoutes = RouterModule.forChild(CHILD_ROUTES);
