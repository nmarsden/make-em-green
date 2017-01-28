var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
import { GameStateService } from "./game-state.service";
export var SettingsService = (function () {
    function SettingsService(gameStateService) {
        this.gameStateService = gameStateService;
        this.themeUpdatedEvent = new EventEmitter();
    }
    SettingsService.prototype.getGameState = function () {
        // Lazy initialize gameState
        if (typeof this.gameState === 'undefined') {
            this.gameState = this.gameStateService.getGameState();
        }
        return this.gameState;
    };
    SettingsService.prototype.getIsSoundOn = function () {
        return this.getGameState().isSoundOn;
    };
    SettingsService.prototype.updateIsSoundOn = function (isSoundOn) {
        this.getGameState().isSoundOn = isSoundOn;
        this.gameStateService.saveState();
    };
    SettingsService.prototype.getTheme = function () {
        return this.getGameState().theme;
    };
    SettingsService.prototype.updateTheme = function (theme) {
        this.getGameState().theme = theme;
        this.gameStateService.saveState();
        this.themeUpdatedEvent.emit(theme);
    };
    SettingsService.prototype.subscribeToThemeUpdatedEvent = function (fn) {
        this.themeUpdatedEvent.subscribe(fn);
    };
    SettingsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [GameStateService])
    ], SettingsService);
    return SettingsService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/settings.service.js.map