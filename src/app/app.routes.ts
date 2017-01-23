import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { InfoComponent } from "./info/info.component";
import { SelectLevelComponent } from "./select-level/select-level.component";
import { SettingsComponent } from "./settings/settings.component";
import { TutorialComponent } from "./tutorial/tutorial.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select-level', component: SelectLevelComponent },
  { path: 'level', component: LevelComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'info', component: InfoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
