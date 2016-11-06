import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {BasicsComponent} from "./basics/basics.component";

export const routes = RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'basics', component: BasicsComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
]);