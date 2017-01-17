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
import { GameStateService } from "./game-state.service";
import { PuzzleService } from "./puzzle.service";
export var LevelService = (function () {
    function LevelService(gameStateService, puzzleService) {
        this.gameStateService = gameStateService;
        this.puzzleService = puzzleService;
        this.gameState = this.gameStateService.getGameState();
    }
    LevelService.prototype.getStarsEarned = function (level) {
        var playersBestSolution = this.getPlayersBestSolution(level);
        if (playersBestSolution === 0) {
            return 0;
        }
        var bestSolution = this.puzzleService.getNumMovesForKnownSolution(level);
        if (playersBestSolution === bestSolution) {
            return 3;
        }
        else if (playersBestSolution <= (bestSolution + 4)) {
            return 2;
        }
        else {
            return 1;
        }
    };
    LevelService.prototype.getPlayersBestSolution = function (level) {
        return this.isLevelSolved(level) ? this.gameState.bestSolutions[level - 1] : 0;
    };
    LevelService.prototype.isLevelSolved = function (level) {
        return (level <= this.gameState.bestSolutions.length);
    };
    LevelService.prototype.isLevelLocked = function (level) {
        return (level > (this.gameState.bestSolutions.length + 1));
    };
    LevelService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [GameStateService, PuzzleService])
    ], LevelService);
    return LevelService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/level.service.js.map