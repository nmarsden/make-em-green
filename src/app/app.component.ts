import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameStateService } from "./services/game-state.service";
import { SoundService } from "./services/sound.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.variables.less',
    './app.component.less'
  ]
})

export class AppComponent implements OnInit {

  private gameState;

  constructor(
    private gameStateService: GameStateService,
    private soundService: SoundService,
    private router: Router
  ) {

  }

  ngOnInit() {
    // init game state
    this.gameStateService.restoreState();
    this.gameState = this.gameStateService.getGameState();

    // init sounds
    this.soundService.initSounds(this.gameState.isSoundOn);

    // setup event handler to save game state before unload
    window.onbeforeunload = () => {
      this.gameStateService.saveState();
    };
  }

  showHome () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/']);
  }

  showInfo() {
    this.soundService.playTransitionSound();
    this.router.navigate(['/info']);
  }

  toggleSound() {
    this.gameState.isSoundOn = !this.gameState.isSoundOn;
    this.soundService.setMute(!this.gameState.isSoundOn);
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }
}
