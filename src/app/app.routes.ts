import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { InfoComponent } from "./info/info.component";
import { SelectLevelComponent } from "./select-level/select-level.component";
import { SettingsComponent } from "./settings/settings.component";
import { TutorialComponent } from "./tutorial/tutorial.component";
import { CheatSheetComponent } from "./cheat-sheet/cheat-sheet.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select-level', component: SelectLevelComponent },
  { path: 'level', component: LevelComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'cheat-sheet', component: CheatSheetComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
