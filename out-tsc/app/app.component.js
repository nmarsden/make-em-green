var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { GameStateService } from "./services/game-state.service";
import { SoundService } from "./services/sound.service";
import { Router } from "@angular/router";
export var AppComponent = (function () {
    function AppComponent(gameStateService, soundService, router) {
        this.gameStateService = gameStateService;
        this.soundService = soundService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init game state
        this.gameStateService.restoreState();
        this.gameState = this.gameStateService.getGameState();
        // init sounds
        this.soundService.initSounds(this.gameState.isSoundOn);
        // setup event handler to save game state before unload
        window.onbeforeunload = function () {
            _this.gameStateService.saveState();
        };
    };
    AppComponent.prototype.showHome = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.showInfo = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/info']);
    };
    AppComponent.prototype.toggleSound = function () {
        this.soundService.playHighlightSound();
        this.gameState.isSoundOn = !this.gameState.isSoundOn;
        this.soundService.setMute(!this.gameState.isSoundOn);
    };
    AppComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            encapsulation: ViewEncapsulation.None,
            templateUrl: './app.component.html',
            styleUrls: [
                './app.variables.less',
                './app.component.less'
            ]
        }), 
        __metadata('design:paramtypes', [GameStateService, SoundService, Router])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/app.component.js.map