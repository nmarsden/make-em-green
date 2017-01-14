import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { InfoComponent } from "./info/info.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'level', component: LevelComponent },
  { path: 'info', component: InfoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
