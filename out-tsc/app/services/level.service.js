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
    LevelService.prototype.getLevelData = function (level) {
        return this.puzzleService.getPuzzle(level);
    };
    LevelService.prototype.getStarsEarned = function (level, numMoves) {
        if (numMoves === 999) {
            return 0;
        }
        var bestSolution = this.puzzleService.getNumMovesForKnownSolution(level);
        if (numMoves === bestSolution) {
            return 3;
        }
        else if (numMoves <= (bestSolution + 4)) {
            return 2;
        }
        else {
            return 1;
        }
    };
    LevelService.prototype.getPlayersBestSolution = function (level) {
        return this.isLevelSolved(level) ? this.gameState.bestSolutions[level - 1] : 999;
    };
    LevelService.prototype.isLevelSolved = function (level) {
        return (level <= this.gameState.bestSolutions.length);
    };
    LevelService.prototype.isLevelLocked = function (level) {
        return (level > (this.gameState.bestSolutions.length + 1));
    };
    LevelService.prototype.updatePlayersBestSolution = function (level, movesTaken) {
        var playersBestSolution = this.getPlayersBestSolution(level);
        if (movesTaken < playersBestSolution) {
            if (this.isLevelSolved(level)) {
                this.gameState.bestSolutions[level - 1] = movesTaken;
            }
            else {
                this.gameState.bestSolutions.push(movesTaken);
            }
            // Save updated best solutions
            this.gameStateService.saveState();
        }
    };
    LevelService.prototype.getSelectedLevel = function () {
        return this.gameState.selectedLevel;
    };
    LevelService.prototype.updateSelectedLevel = function (level) {
        this.gameState.selectedLevel = level;
        // Save updated selected level
        this.gameStateService.saveState();
    };
    LevelService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [GameStateService, PuzzleService])
    ], LevelService);
    return LevelService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/level.service.js.map