import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from "@angular/router";
import { GameStateService } from "../services/game-state.service";
import { SoundService } from "../services/sound.service";
import { routerTransition } from '../app.routes.animations';
import { LevelService } from "../services/level.service";

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.less'],
  host: {
    '[@routerTransition]': '',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition(),
    trigger('fadeInOut', [
      state('in', style({})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class LevelComponent implements OnInit {

  private isOnInitTriggered: boolean;
  private gameState;
  private squares;
  private bestSolutions;
  private modalContents;
  private isShowModal = false;

  constructor(
    private router: Router,
    private gameStateService : GameStateService,
    private soundService: SoundService,
    private levelService: LevelService
  ) {

    this.gameState = gameStateService.getGameState();
    this.squares = this.gameState.squares;

    this.bestSolutions = this.gameState.bestSolutions;

    this.isOnInitTriggered = false;

    this.initLevel(this.gameState.selectedLevel);
    this.initBoard();
  }

  ngOnInit() {
    this.isOnInitTriggered = true;
  }

  showHome () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/']);
  }

  initSquares (level) {
    let levelData = this.levelService.getLevelData(level);
    let i = 0, row = 0, len = 25;
    this.squares = [];
    for (; i < len; i=i+5, row++) {
      this.squares.push({ id: i,   selected: !(levelData[row] & 1) });
      this.squares.push({ id: i+1, selected: !(levelData[row] & 2) });
      this.squares.push({ id: i+2, selected: !(levelData[row] & 4) });
      this.squares.push({ id: i+3, selected: !(levelData[row] & 8) });
      this.squares.push({ id: i+4, selected: !(levelData[row] & 16) });
    }
  }

  initBoard () {
    this.initSquares(this.gameState.selectedLevel);
    this.gameState.movesTaken = 0;
    this.gameState.movesLeft = 15;
  }

  replay () {
    if (!this.gameState.isLevelLocked) {
      this.gameState.isReplay = true;
      this.initBoard();
    }
  }

  isShowSolved () {
    return this.gameState.isLevelSolved && !this.gameState.isReplay;
  }

  isGameWon () {
    let i = 0, len = this.squares.length;
    for(; i<len; i++) {
      if (!this.squares[i].selected) {
        return false;
      }
    }
    return true;
  }

  showModal (modalContents) {
    this.modalContents = modalContents;
    this.isShowModal = true;
  }

  closeModalAndExecFn (functionToExecute) {
    return () => {
      this.isShowModal = false;
      functionToExecute.call(this);
    };
  }

  selectPreviousLevel () {
    if (this.gameState.selectedLevel > 1) {
      this.gameState.selectedLevel--;
      this.gameState.isReplay = false;
      this.initLevel(this.gameState.selectedLevel);
      this.initBoard();
    }
  }

  selectNextLevel () {
    if (this.gameState.selectedLevel < 100) {
      this.gameState.selectedLevel++;
      this.gameState.isReplay = false;
      this.initLevel(this.gameState.selectedLevel);
      this.initBoard();
    }
  }

  initLevel (selectedLevel) {
    this.gameState.isLevelLocked = this.levelService.isLevelLocked(selectedLevel);
    this.gameState.isLevelSolved = this.levelService.isLevelSolved(selectedLevel);
    this.gameState.bestSolution = this.levelService.getPlayersBestSolution(selectedLevel);

    let numStarsEarned = this.levelService.getStarsEarned(this.gameState.selectedLevel, this.gameState.bestSolution);
    this.gameState.starsEarned[0].earned = (numStarsEarned > 0);
    this.gameState.starsEarned[1].earned = (numStarsEarned > 1);
    this.gameState.starsEarned[2].earned = (numStarsEarned > 2);

    // Save selected level
    this.gameStateService.saveState();
  }

  gameLost () {
    this.soundService.playLostSound();

    this.showModal({
      title: "No Moves Left!",
      starsEarned: [],
      message: "I know you can do this. Give it another go?",
      okText: "Retry",
      okHandler: this.closeModalAndExecFn(this.replay),
      cancelText: "Quit",
      cancelHandler: this.closeModalAndExecFn(this.showHome)
    });
  }

  updateBestSolutions () {
    if (this.gameState.movesTaken < this.gameState.bestSolution) {
      this.gameState.bestSolution = this.gameState.movesTaken;
      if (this.levelService.isLevelSolved(this.gameState.selectedLevel)) {
        this.bestSolutions[this.gameState.selectedLevel-1] = this.gameState.bestSolution;
      } else {
        this.bestSolutions.push(this.gameState.bestSolution);
      }
      // Save updated best solutions
      this.gameStateService.saveState();
    }
  }

  gameWon () {
    this.soundService.playWonSound();

    this.updateBestSolutions();

    let numStarsEarned = this.levelService.getStarsEarned(this.gameState.selectedLevel, this.gameState.movesTaken);
    let starsEarned = [numStarsEarned > 0, numStarsEarned > 1, numStarsEarned > 2];

    this.showModal({
      title: "Level Solved",
      starsEarned: starsEarned,
      message: "You are awesome! Ready for the next level?",
      okText: "Next Level",
      okHandler: this.closeModalAndExecFn(this.selectNextLevel),
      cancelText: "Replay",
      cancelHandler: this.closeModalAndExecFn(this.replay)
    });
  }

  boardClicked(event) {
    this.gameState.movesTaken = this.gameState.movesTaken + 1;
    this.gameState.movesLeft = this.gameState.movesLeft - 1;

    if (this.isGameWon()) {
      this.gameWon();
    }
    else if (this.gameState.movesLeft === 0) {
      this.gameLost();
    }
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
