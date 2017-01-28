import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {

  private model;
  private isInitialized = false;

  constructor() {
    // Properties saved to local storage
    this.model = {
      selectedLevel: 1,  // values in range: 1 to 100
      bestSolutions: [],
      isSoundOn: true,
      theme: 'fruit'
    };
  }

  getGameState() {
    if (!this.isInitialized) {
      throw "Invalid use of GameStateService: getGameState() cannot be called before restoreState()";
    }
    return this.model;
  }

  saveState() {
    (localStorage as any).gameStateService = JSON.stringify(this.model);
  }

  restoreState() {
    this.isInitialized = true;

    if ((localStorage as any).gameStateService) {
      let state = JSON.parse((localStorage as any).gameStateService);
      this.model = Object.assign(this.model, state);
    }
  }

}
