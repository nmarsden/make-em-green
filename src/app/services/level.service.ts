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

  getLevelData (level: number) {
    return this.puzzleService.getPuzzle(level);
  }

  getStarsEarned (level: number, numMoves: number) {
    if (numMoves === 999) {
      return 0;
    }

    let bestSolution = this.puzzleService.getNumMovesForKnownSolution(level);

    if (numMoves === bestSolution) {
      return 3;
    } else if (numMoves <= (bestSolution + 4)) {
      return 2;
    } else {
      return 1;
    }
  }

  getPlayersBestSolution (level: number) {
    return this.isLevelSolved(level) ? this.gameState.bestSolutions[level - 1] : 999;
  }

  isLevelSolved (level: number) {
    return (level <= this.gameState.bestSolutions.length);
  }

  isLevelLocked (level: number) {
    return (level > (this.gameState.bestSolutions.length + 1));
  }

  updatePlayersBestSolution (level: number, movesTaken: number) {
    let playersBestSolution = this.getPlayersBestSolution(level);
    if (movesTaken < playersBestSolution) {
      if (this.isLevelSolved(level)) {
        this.gameState.bestSolutions[level-1] = movesTaken;
      } else {
        this.gameState.bestSolutions.push(movesTaken);
      }
      // Save updated best solutions
      this.gameStateService.saveState();
    }
  }

}
