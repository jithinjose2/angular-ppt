import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {BasicsComponent} from "./basics/basics.component";
import {StructureComponent} from "./structure/structure.component";
import {ComponentComponent} from "./component/component.component";
import {DatabindingComponent} from "./databinding/databinding.component";
import {DirectiveComponent} from "./directive/directive.component";
import {RoutingComponent} from "./routing/routing.component";
import {PipeComponent} from "./pipe/pipe.component";
import {DebuggingComponent} from "./debugging/debugging.component";
import {DeploymentComponent} from "./deployment/deployment.component";
import {QuestionsComponent} from "./questions/questions.component";

export const routes = RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'basics', component: BasicsComponent },
    { path: 'structure', component: StructureComponent },
    { path: 'component', component: ComponentComponent },
    { path: 'databinding', component: DatabindingComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'routing', loadChildren: 'app/routing/routing.module#RoutingModule'},
    { path: 'pipes', component: PipeComponent},
    { path: 'debugging', component: DebuggingComponent},
    { path: 'deployment', component: DeploymentComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
]);