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
        this.model = {
            // Properties reset on page refresh
            bestSolution: 999,
            starsEarned: [
                { id: 0, earned: false },
                { id: 1, earned: false },
                { id: 2, earned: false }
            ],
            movesTaken: 0,
            movesLeft: 15,
            squares: [],
            isLevelLocked: false,
            isLevelSolved: false,
            isReplay: false,
            isSoundOn: true,
            // Properties saved to local storage
            selectedLevel: 1,
            bestSolutions: []
        };
    }
    GameStateService.prototype.getGameState = function () {
        return this.model;
    };
    GameStateService.prototype.saveState = function () {
        var state = {
            selectedLevel: this.model.selectedLevel,
            bestSolutions: this.model.bestSolutions
        };
        localStorage.gameStateService = JSON.stringify(state);
    };
    GameStateService.prototype.restoreState = function () {
        if (localStorage.gameStateService) {
            var state = JSON.parse(localStorage.gameStateService);
            this.model.selectedLevel = state.selectedLevel;
            this.model.bestSolutions = state.bestSolutions;
        }
    };
    GameStateService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameStateService);
    return GameStateService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/game-state.service.js.map