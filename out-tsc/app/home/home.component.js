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
import { Router } from "@angular/router";
import { LevelService } from "../services/level.service";
export var HomeComponent = (function () {
    function HomeComponent(router, soundService, levelService) {
        this.router = router;
        this.soundService = soundService;
        this.levelService = levelService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isFirstLevelSolved = this.levelService.isLevelSolved(1);
    };
    HomeComponent.prototype.showSelectLevel = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/select-level']);
    };
    HomeComponent.prototype.showLevel = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/level']);
    };
    HomeComponent.prototype.showSettings = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/settings']);
    };
    HomeComponent.prototype.showTutorial = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/tutorial']);
    };
    HomeComponent.prototype.showInfo = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/info']);
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
        __metadata('design:paramtypes', [Router, SoundService, LevelService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/home/home.component.js.map