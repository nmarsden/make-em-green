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
export var InfoComponent = (function () {
    function InfoComponent(soundService) {
        this.soundService = soundService;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.playHoverSound = function () {
        this.soundService.playHoverSound();
    };
    InfoComponent = __decorate([
        Component({
            selector: 'app-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition()
            ]
        }), 
        __metadata('design:paramtypes', [SoundService])
    ], InfoComponent);
    return InfoComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/info/info.component.js.map