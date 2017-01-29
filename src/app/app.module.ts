import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { GameStateService } from './services/game-state.service';
import { PuzzleService } from './services/puzzle.service';
import { LevelService } from './services/level.service';
import { SoundService } from "./services/sound.service";
import { SettingsService } from "./services/settings.service";
import { ThemeService } from "./services/theme.service";

import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SelectLevelComponent } from './select-level/select-level.component';
import { SettingsComponent } from './settings/settings.component';
import { ThemeOptionComponent } from './theme-option/theme-option.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { BoardComponent } from './board/board.component';
import { BasicBoardComponent } from './basic-board/basic-board.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    HomeComponent,
    InfoComponent,
    SelectLevelComponent,
    SettingsComponent,
    ThemeOptionComponent,
    TutorialComponent,
    BoardComponent,
    BasicBoardComponent,
    CheatSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    GameStateService,
    PuzzleService,
    LevelService,
    SoundService,
    SettingsService,
    ThemeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
