var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SelectLevelComponent } from './select-level/select-level.component';
import { SettingsComponent } from './settings/settings.component';
import { ThemeOptionComponent } from './theme-option/theme-option.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { BoardComponent } from './board/board.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LevelComponent,
                HomeComponent,
                InfoComponent,
                SelectLevelComponent,
                SettingsComponent,
                ThemeOptionComponent,
                TutorialComponent,
                BoardComponent
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
                SettingsService
            ],
            bootstrap: [
                AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/app.module.js.map