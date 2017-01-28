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
import { Howl } from 'howler';
export var SoundService = (function () {
    function SoundService() {
    }
    SoundService.prototype.initSounds = function (isSoundOn) {
        this.setMute(!isSoundOn);
        this.highlight = new Howl({
            src: ['assets/sounds/highlight.mp3'],
            volume: 0.3
        });
        this.blip = new Howl({ src: ['assets/sounds/blip.mp3'] });
        this.flip = new Howl({ src: ['assets/sounds/flip.mp3'] });
        this.menuSounds = new Howl({
            src: ['assets/sounds/menu-sounds.mp3'],
            sprite: {
                won: [5815, (8672 - 5815)],
                lost: [12190, (13410 - 12190)]
            }
        });
        this.transition = new Howl({
            src: ['assets/sounds/transition.mp3'],
            rate: 2
        });
        this.backgroundTrack = new Howl({
            src: ['assets/sounds/sky-loop.mp3'],
            loop: true,
            autoplay: false
        });
    };
    SoundService.prototype.playHighlightSound = function () {
        this.highlight.play();
    };
    SoundService.prototype.playFlipSound = function () {
        this.flip.play();
    };
    SoundService.prototype.playWonSound = function () {
        this.menuSounds.volume(1);
        this.menuSounds.play('won');
    };
    SoundService.prototype.playLostSound = function () {
        this.menuSounds.volume(0.2);
        this.menuSounds.play('lost');
    };
    SoundService.prototype.playBlipSound = function () {
        this.blip.play();
    };
    SoundService.prototype.playTransitionSound = function () {
        this.transition.play();
        this.transition.fade(1, 0.5, 2);
    };
    SoundService.prototype.setMute = function (isMuted) {
        Howler.mute(isMuted);
    };
    SoundService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], SoundService);
    return SoundService;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/services/sound.service.js.map