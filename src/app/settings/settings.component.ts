import { Component, OnInit } from '@angular/core';
import { GameStateService } from "../services/game-state.service";
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";

@Component({
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
})
export class SettingsComponent implements OnInit {

  private gameState;
  private themes = [ 'classic', 'cat', 'fruit', 'reptile', 'amphibian', 'mineral', 'plant'];

  constructor(
    private gameStateService: GameStateService,
    private soundService: SoundService
  ) {

    this.gameState = this.gameStateService.getGameState();
  }

  ngOnInit() {
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }

  clickTheme() {
    this.soundService.playHighlightSound();
  }
}
