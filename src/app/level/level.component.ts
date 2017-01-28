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
  private isLevelLocked;
  private isLevelSolved;
  private isReplay;
  private movesTaken;
  private movesLeft;
  private starsEarned = [];
  private bestSolution;

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
    this.movesTaken = 0;
    this.movesLeft = 15;
  }

  replay () {
    if (!this.isLevelLocked) {
      this.isReplay = true;
      this.initBoard();
    }
  }

  isShowSolved () {
    return this.isLevelSolved && !this.isReplay;
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
      this.initLevel(this.gameState.selectedLevel);
      this.initBoard();
    }
  }

  selectNextLevel () {
    if (this.gameState.selectedLevel < 100) {
      this.gameState.selectedLevel++;
      this.initLevel(this.gameState.selectedLevel);
      this.initBoard();
    }
  }

  initLevel (selectedLevel) {
    this.isReplay = false;
    this.isLevelLocked = this.levelService.isLevelLocked(selectedLevel);
    this.isLevelSolved = this.levelService.isLevelSolved(selectedLevel);
    this.bestSolution = this.levelService.getPlayersBestSolution(selectedLevel);

    let numStarsEarned = this.levelService.getStarsEarned(this.gameState.selectedLevel, this.bestSolution);
    this.starsEarned = [numStarsEarned > 0, numStarsEarned > 1, numStarsEarned > 2];

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

  gameWon () {
    this.soundService.playWonSound();

    this.levelService.updatePlayersBestSolution(this.gameState.selectedLevel, this.movesTaken);

    let numStarsEarned = this.levelService.getStarsEarned(this.gameState.selectedLevel, this.movesTaken);
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
    this.movesTaken = this.movesTaken + 1;
    this.movesLeft = this.movesLeft - 1;

    if (this.isGameWon()) {
      this.gameWon();
    }
    else if (this.movesLeft === 0) {
      this.gameLost();
    }
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
