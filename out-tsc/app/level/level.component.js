var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from "@angular/router";
import { SoundService } from "../services/sound.service";
import { routerTransition } from '../app.routes.animations';
import { LevelService } from "../services/level.service";
export var LevelComponent = (function () {
    function LevelComponent(router, soundService, levelService) {
        this.router = router;
        this.soundService = soundService;
        this.levelService = levelService;
        this.isShowModal = false;
        this.starsEarned = [];
        this.selectedLevel = this.levelService.getSelectedLevel();
        this.isOnInitTriggered = false;
        this.initLevel(this.selectedLevel);
    }
    LevelComponent.prototype.ngOnInit = function () {
        this.isOnInitTriggered = true;
    };
    LevelComponent.prototype.showHome = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/']);
    };
    LevelComponent.prototype.initSquares = function (level) {
        var levelData = this.levelService.getLevelData(level);
        var i = 0, row = 0, len = 25;
        this.squares = [];
        for (; i < len; i = i + 5, row++) {
            this.squares.push({ id: i, selected: !(levelData[row] & 1) });
            this.squares.push({ id: i + 1, selected: !(levelData[row] & 2) });
            this.squares.push({ id: i + 2, selected: !(levelData[row] & 4) });
            this.squares.push({ id: i + 3, selected: !(levelData[row] & 8) });
            this.squares.push({ id: i + 4, selected: !(levelData[row] & 16) });
        }
    };
    LevelComponent.prototype.initBoard = function () {
        this.initSquares(this.selectedLevel);
        this.movesTaken = 0;
        this.movesLeft = 15;
    };
    LevelComponent.prototype.replay = function () {
        if (!this.isLevelLocked) {
            this.isReplay = true;
            this.initBoard();
        }
    };
    LevelComponent.prototype.isShowSolved = function () {
        return this.isLevelSolved && !this.isReplay;
    };
    LevelComponent.prototype.isGameWon = function () {
        var i = 0, len = this.squares.length;
        for (; i < len; i++) {
            if (!this.squares[i].selected) {
                return false;
            }
        }
        return true;
    };
    LevelComponent.prototype.showModal = function (modalContents) {
        this.modalContents = modalContents;
        this.isShowModal = true;
    };
    LevelComponent.prototype.closeModalAndExecFn = function (functionToExecute) {
        var _this = this;
        return function () {
            _this.isShowModal = false;
            functionToExecute.call(_this);
        };
    };
    LevelComponent.prototype.selectPreviousLevel = function () {
        if (this.selectedLevel > 1) {
            this.selectedLevel--;
            this.initLevel(this.selectedLevel);
        }
    };
    LevelComponent.prototype.selectNextLevel = function () {
        if (this.selectedLevel < 100) {
            this.selectedLevel++;
            this.initLevel(this.selectedLevel);
        }
    };
    LevelComponent.prototype.initLevel = function (selectedLevel) {
        this.isReplay = false;
        this.isLevelLocked = this.levelService.isLevelLocked(selectedLevel);
        this.isLevelSolved = this.levelService.isLevelSolved(selectedLevel);
        this.bestSolution = this.levelService.getPlayersBestSolution(selectedLevel);
        var numStarsEarned = this.levelService.getStarsEarned(selectedLevel, this.bestSolution);
        this.starsEarned = [numStarsEarned > 0, numStarsEarned > 1, numStarsEarned > 2];
        this.levelService.updateSelectedLevel(selectedLevel);
        this.initBoard();
    };
    LevelComponent.prototype.gameLost = function () {
        this.soundService.playLostSound();
        this.showModal({
            title: "No Moves Left!",
            starsEarned: [],
            message: "I know you can do this. Give it another go?",
            okText: "Retry",
            okHandler: this.closeModalAndExecFn(this.replay),
            cancelText: "Quit",
            cancelHandler: this.closeModalAndExecFn(this.showHome)
        });
    };
    LevelComponent.prototype.gameWon = function () {
        this.soundService.playWonSound();
        this.levelService.updatePlayersBestSolution(this.selectedLevel, this.movesTaken);
        var numStarsEarned = this.levelService.getStarsEarned(this.selectedLevel, this.movesTaken);
        var starsEarned = [numStarsEarned > 0, numStarsEarned > 1, numStarsEarned > 2];
        this.showModal({
            title: "Level Solved",
            starsEarned: starsEarned,
            message: "You are awesome! Ready for the next level?",
            okText: "Next Level",
            okHandler: this.closeModalAndExecFn(this.selectNextLevel),
            cancelText: "Replay",
            cancelHandler: this.closeModalAndExecFn(this.replay)
        });
    };
    LevelComponent.prototype.boardClicked = function (event) {
        this.movesTaken = this.movesTaken + 1;
        this.movesLeft = this.movesLeft - 1;
        if (this.isGameWon()) {
            this.gameWon();
        }
        else if (this.movesLeft === 0) {
            this.gameLost();
        }
    };
    LevelComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    LevelComponent = __decorate([
        Component({
            selector: 'app-level',
            templateUrl: './level.component.html',
            styleUrls: ['./level.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition(),
                trigger('fadeInOut', [
                    state('in', style({})),
                    transition('void => *', [
                        style({
                            opacity: 0
                        }),
                        animate('500ms ease-in-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [Router, SoundService, LevelService])
    ], LevelComponent);
    return LevelComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/level/level.component.js.map