var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var GameStateService = (function () {
    function GameStateService() {
        this.isInitialized = false;
        // Properties saved to local storage
        this.model = {
            selectedLevel: 1,
            bestSolutions: [],
            isSoundOn: true,
            theme: 'fruit'
        };
    }
    GameStateService.prototype.getGameState = function () {
        if (!this.isInitialized) {
            throw "Invalid use of GameStateService: getGameState() cannot be called before restoreState()";
        }
        return this.model;
    };
    GameStateService.prototype.saveState = function () {
        localStorage.gameStateService = JSON.stringify(this.model);
    };
    GameStateService.prototype.restoreState = function () {
        this.isInitialized = true;
        if (localStorage.gameStateService) {
            var state = JSON.parse(localStorage.gameStateService);
            this.model = Object.assign(this.model, state);
        }
    };
    GameStateService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameStateService);
    return GameStateService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/game-state.service.js.map