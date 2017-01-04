import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {

  private model;

  constructor() {
    this.model = {
      // Properties reset on page refresh
      bestSolution: 999,
      starsEarned: [
        {id: 0, earned: false},
        {id: 1, earned: false},
        {id: 2, earned: false}
      ],
      movesTaken: 0,
      movesLeft: 15,
      squares: [],
      isLevelLocked: false,
      isLevelSolved: false,
      isReplay: false,
      isSoundOn: true,

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
    // localStorage.gameStateService = angular.toJson(state);
  }

  restoreState() {
    if ((localStorage as any).gameStateService) {
      let state = JSON.parse((localStorage as any).gameStateService);
      // var state = angular.fromJson(localStorage.gameStateService);
      this.model.selectedLevel = state.selectedLevel;
      this.model.bestSolutions = state.bestSolutions;
    }
  }

}
