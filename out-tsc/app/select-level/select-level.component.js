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
import { LevelService } from "../services/level.service";
import { Router } from "@angular/router";
export var SelectLevelComponent = (function () {
    function SelectLevelComponent(router, levelService, soundService) {
        this.router = router;
        this.levelService = levelService;
        this.soundService = soundService;
        this.levelRows = [];
        this.initLevelRows();
    }
    SelectLevelComponent.prototype.ngOnInit = function () {
    };
    SelectLevelComponent.prototype.initLevelRows = function () {
        for (var row = 0; row < 10; row++) {
            this.levelRows[row] = [];
            for (var col = 0; col < 10; col++) {
                var level = 1 + (row * 10) + col;
                var bestSolution = this.levelService.getPlayersBestSolution(level);
                this.levelRows[row].push({
                    numStars: this.levelService.getStarsEarned(level, bestSolution),
                    isSolved: this.levelService.isLevelSolved(level),
                    isLocked: this.levelService.isLevelLocked(level)
                });
            }
        }
    };
    SelectLevelComponent.prototype.levelRowTrackByFn = function (index) {
        return index;
    };
    SelectLevelComponent.prototype.levelTrackByFn = function (index, level) {
        return index;
    };
    SelectLevelComponent.prototype.clickLevel = function (row, col) {
        var level = 1 + (row * 10) + col;
        this.showLevel(level);
    };
    SelectLevelComponent.prototype.showLevel = function (level) {
        this.levelService.updateSelectedLevel(level);
        this.soundService.playTransitionSound();
        this.router.navigate(['/level']);
    };
    SelectLevelComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    SelectLevelComponent = __decorate([
        Component({
            selector: 'app-select-level',
            templateUrl: './select-level.component.html',
            styleUrls: ['./select-level.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition()
            ]
        }), 
        __metadata('design:paramtypes', [Router, LevelService, SoundService])
    ], SelectLevelComponent);
    return SelectLevelComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/select-level/select-level.component.js.map