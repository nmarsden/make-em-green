import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from "./info/info.component";


export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
