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
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";
import { SettingsService } from "../services/settings.service";
export var SettingsComponent = (function () {
    function SettingsComponent(settingsService, soundService) {
        this.settingsService = settingsService;
        this.soundService = soundService;
        this.model = {
            themes: ['classic', 'cat', 'fruit', 'reptile', 'amphibian', 'mineral', 'plant'],
            selectedTheme: this.settingsService.getTheme()
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    SettingsComponent.prototype.clickTheme = function (theme) {
        this.soundService.playHighlightSound();
        this.model.selectedTheme = theme;
        this.settingsService.updateTheme(this.model.selectedTheme);
    };
    SettingsComponent = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition()
            ]
        }), 
        __metadata('design:paramtypes', [SettingsService, SoundService])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/settings/settings.component.js.map