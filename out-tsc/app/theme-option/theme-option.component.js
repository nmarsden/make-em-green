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
import { ThemeService } from "../services/theme.service";
export var ThemeOptionComponent = (function () {
    function ThemeOptionComponent(themeService) {
        this.themeService = themeService;
    }
    ThemeOptionComponent.prototype.ngOnInit = function () {
        this.themeClassObject = this.themeService.getThemeClassObject(this.theme);
    };
    ThemeOptionComponent = __decorate([
        Component({
            selector: 'app-theme-option',
            inputs: ['theme'],
            templateUrl: './theme-option.component.html',
            styleUrls: ['./theme-option.component.less']
        }), 
        __metadata('design:paramtypes', [ThemeService])
    ], ThemeOptionComponent);
    return ThemeOptionComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/theme-option/theme-option.component.js.map