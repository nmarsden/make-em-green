import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {

  private model;

  constructor() {
    this.model = {
      // Properties reset on page refresh
      squares: [],
      isSoundOn: true,
      theme: 'fruit',

      // Properties saved to local storage
      selectedLevel: 1,  // values in range: 1 to 100
      bestSolutions: []
    };
  }

  getGameState() {
    return this.model;
  }

  saveState() {
    let state = {
      selectedLevel: this.model.selectedLevel,
      bestSolutions: this.model.bestSolutions
    };
    (localStorage as any).gameStateService = JSON.stringify(state);
  }

  restoreState() {
    if ((localStorage as any).gameStateService) {
      let state = JSON.parse((localStorage as any).gameStateService);
      this.model.selectedLevel = state.selectedLevel;
      this.model.bestSolutions = state.bestSolutions;
    }
  }

}
