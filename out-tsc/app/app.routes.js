import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { InfoComponent } from "./info/info.component";
export var routes = [
    { path: '', component: HomeComponent },
    { path: 'level', component: LevelComponent },
    { path: 'info', component: InfoComponent }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/app.routes.js.map