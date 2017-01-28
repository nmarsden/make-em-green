import { Injectable, EventEmitter } from '@angular/core';
import { GameStateService } from "./game-state.service";

@Injectable()
export class SettingsService {

  private gameState;
  private themeUpdatedEvent: EventEmitter<string>;

  constructor(private gameStateService: GameStateService) {
    this.themeUpdatedEvent = new EventEmitter();
  }

  private getGameState() {
    // Lazy initialize gameState
    if (typeof this.gameState === 'undefined') {
      this.gameState = this.gameStateService.getGameState();
    }
    return this.gameState;
  }

  getIsSoundOn() {
    return this.getGameState().isSoundOn;
  }

  updateIsSoundOn(isSoundOn) {
    this.getGameState().isSoundOn = isSoundOn;

    this.gameStateService.saveState();
  }

  getTheme() {
    return this.getGameState().theme;
  }

  updateTheme(theme) {
    this.getGameState().theme = theme;

    this.gameStateService.saveState();

    this.themeUpdatedEvent.emit(theme);
  }

  subscribeToThemeUpdatedEvent(fn) {
    this.themeUpdatedEvent.subscribe(fn);
  }
}
