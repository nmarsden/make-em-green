import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable()
export class SoundService {

  private highlight: Howl;
  private flip: Howl;
  private menuSounds: Howl;
  private backgroundTrack: Howl;

  constructor() { }

  initSounds(isSoundOn) {
    this.setMute(!isSoundOn);

    this.highlight = new Howl({
      src: ['../../assets/sounds/highlight.mp3'],
      volume: 0.3
    });
    this.flip = new Howl({ src: ['../../assets/sounds/flip.mp3'] });
    this.menuSounds = new Howl({
      src: ['../../assets/sounds/menu-sounds.mp3'],
      sprite: {
        hover: [847, (1390 - 847)],
        won: [5815, (8672 - 5815)],
        lost: [12190, (13410 - 12190)]
      }
    });
    this.backgroundTrack = new Howl({
      src: ['../../assets/sounds/sky-loop.mp3'],
      loop: true,
      autoplay: false
    })
  }

  playHighlightSound() {
    this.highlight.play();
  }

  playFlipSound() {
    this.flip.play();
  }

  playHoverSound() {
    this.menuSounds.volume(1);
    this.menuSounds.play('hover');
  }

  playWonSound() {
    this.menuSounds.volume(1);
    this.menuSounds.play('won');
  }

  playLostSound() {
    this.menuSounds.volume(0.2);
    this.menuSounds.play('lost');
  }

  setMute(isMuted) {
    Howler.mute(isMuted);
  }
}
