var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { SoundService } from "../services/sound.service";
import { GameStateService } from "../services/game-state.service";
import { LevelService } from "../services/level.service";
import { Router } from "@angular/router";
export var HomeComponent = (function () {
    function HomeComponent(router, gameStateService, levelService, soundService) {
        this.router = router;
        this.gameStateService = gameStateService;
        this.levelService = levelService;
        this.soundService = soundService;
        this.levelRows = [];
        this.isAnySolved = false;
        this.gameState = this.gameStateService.getGameState();
        this.initLevelRows();
        this.isAnySolved = this.levelRows[0][0].isSolved;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.initLevelRows = function () {
        for (var row = 0; row < 10; row++) {
            this.levelRows[row] = [];
            for (var col = 0; col < 10; col++) {
                var level = 1 + (row * 10) + col;
                this.levelRows[row].push({
                    numStars: this.levelService.getStarsEarned(level),
                    isSolved: this.levelService.isLevelSolved(level),
                    isLocked: this.levelService.isLevelLocked(level),
                });
            }
        }
    };
    HomeComponent.prototype.levelRowTrackByFn = function (index) {
        return index;
    };
    HomeComponent.prototype.levelTrackByFn = function (index, level) {
        return index;
    };
    HomeComponent.prototype.clickLevel = function (row, col) {
        var level = 1 + (row * 10) + col;
        this.showLevel(level);
    };
    HomeComponent.prototype.showLevel = function (level) {
        this.gameState.selectedLevel = level;
        this.soundService.playTransitionSound();
        this.router.navigate(['/level']);
    };
    HomeComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition()
            ]
        }), 
        __metadata('design:paramtypes', [Router, GameStateService, LevelService, SoundService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/home/home.component.js.map