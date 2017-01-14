import { Injectable } from '@angular/core';
import { GameStateService } from "./game-state.service";
import { PuzzleService } from "./puzzle.service";

@Injectable()
export class LevelService {

  private gameState;

  constructor(
    private gameStateService: GameStateService,
    private puzzleService: PuzzleService) {

    this.gameState = this.gameStateService.getGameState();
  }

  getStarsEarned (level: number) {
    let playersBestSolution = this.getPlayersBestSolution(level);
    if (playersBestSolution === 0) {
      return 0;
    }

    let bestSolution = this.puzzleService.getNumMovesForKnownSolution(level);

    if (playersBestSolution === bestSolution) {
      return 3;
    } else if (playersBestSolution <= (bestSolution + 4)) {
      return 2;
    } else {
      return 1;
    }
  }

  getPlayersBestSolution (level: number) {
    return this.isLevelSolved(level) ? this.gameState.bestSolutions[level - 1] : 0;
  }

  isLevelSolved (level: number) {
    return (level <= this.gameState.bestSolutions.length);
  }

  isLevelLocked (level: number) {
    return (level > (this.gameState.bestSolutions.length + 1));
  }
}
