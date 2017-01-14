import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

import { routing } from './app.routes';

import { GameStateService } from './services/game-state.service';
import { SoundService } from "./services/sound.service";


@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    GameStateService,
    SoundService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
