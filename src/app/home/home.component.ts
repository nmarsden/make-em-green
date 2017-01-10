import { Component, OnInit, trigger, state, style, transition, animate, AnimationTransitionEvent } from '@angular/core';
import { Router } from "@angular/router";
import { GameStateService } from "../services/game-state.service";
import { SoundService } from "../services/sound.service";
import { routerTransition } from '../app.routes.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  host: {
    '[@routerTransition]': '',
    '(@routerTransition.start)': 'routerAnimationStarted($event)',
    '(@routerTransition.done)': 'routerAnimationDone($event)',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition(),
    trigger('fadeIn', [
      state('in', style({})),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms')
      ])
    ]),
    trigger('slideIn', [
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
export class HomeComponent implements OnInit {

  private isOnInitTriggered: boolean;
  private puzzles;
  private solutions;
  private gameState;
  private squares;
  private bestSolutions;
  private modalContents;
  private isShowModal = false;

  constructor(
    private router: Router,
    private gameStateService : GameStateService,
    private soundService: SoundService
  ) {

    let puz = [];
    puz[ 0] = [0,0,21,0 ,0];
    puz[ 1] = [21,21,0 ,21,21];
    puz[ 2] = [10,27,27,27,10];
    puz[ 3] = [0 ,27,0 ,17,27];
    puz[ 4] = [15,23,23,24,27];
    puz[ 5] = [0 ,0 ,21,21,14];
    puz[ 6] = [15,17,17,17,15];
    puz[ 7] = [0 ,4 ,10,21,10];
    puz[ 8] = [10,31,14,26,7 ];
    puz[ 9] = [14,14,14,0 ,0 ];
    puz[10] = [21,21,21,21,14];
    puz[11] = [31,10,27,14,10];
    puz[12] = [8 ,20,10,5 ,2 ];
    puz[13] = [0 ,0 ,2 ,2 ,2 ];
    puz[14] = [0 ,2 ,0 ,2 ,0 ];
    puz[15] = [1 ,1 ,1 ,1 ,31];
    puz[16] = [0 ,0 ,4 ,14,31];
    puz[17] = [4 ,10,21,10,4 ];
    puz[18] = [21,0 ,21,0 ,21];
    puz[19] = [0 ,0 ,17,0 ,0 ];
    puz[20] = [30,2 ,14,2 ,2 ];
    puz[21] = [14,17,17,17,14];
    puz[22] = [0 ,0 ,28,12,4 ];
    puz[23] = [0 ,0 ,17,31,18];
    puz[24] = [1 ,3 ,7 ,15,30];
    puz[25] = [17,17,31,17,17];
    puz[26] = [4 ,14,4 ,4 ,4 ];
    puz[27] = [0 ,0 ,28,28,28];
    puz[28] = [0 ,2 ,0 ,0 ,0 ];
    puz[29] = [0 ,0 ,4 ,0 ,0 ];
    puz[30] = [17,19,21,25,17];
    puz[31] = [31,8 ,4 ,2 ,31];
    puz[32] = [8 ,8 ,21,17,25];
    puz[33] = [20,17,17,22,30];
    puz[34] = [24,10,17,21,0 ];
    puz[35] = [4 ,10,17,31,17];
    puz[36] = [0 ,14,14,14,0 ];
    puz[37] = [21,10,21,10,21];
    puz[38] = [10,1 ,3 ,12,10];
    puz[39] = [0 ,0 ,10,0 ,0 ];
    puz[40] = [17,10,4 ,4 ,4 ];
    puz[41] = [7 ,9 ,7 ,9 ,7 ];
    puz[42] = [17,11,7 ,2 ,14];
    puz[43] = [0 ,27,31,4 ,14];
    puz[44] = [14,5 ,28,15,21];
    puz[45] = [4 ,14,31,14,4 ];
    puz[46] = [4 ,31,5 ,18,16];
    puz[47] = [0 ,17,4 ,17,0 ];
    puz[48] = [17,10,4 ,10,17];
    puz[49] = [31,31,31,31,31];
    puz[50] = [27,0 ,27,0 ,27];
    puz[51] = [31,4 ,0 ,4 ,31];
    puz[52] = [31,10,4 ,10,31];
    puz[53] = [10,17,0 ,27,17];
    puz[54] = [4 ,6 ,27,12,4 ];
    puz[55] = [10,31,21,31,10];
    puz[56] = [21,17,27,17,21];
    puz[57] = [0 ,0 ,14,2 ,0 ];
    puz[58] = [16,8 ,4 ,6 ,5 ];
    puz[59] = [0 ,21,17,21,17];
    puz[60] = [31,14,14,14,31];
    puz[61] = [17,10,0 ,10,17];
    puz[62] = [14,10,14,8 ,14];
    puz[63] = [15,9 ,15,7 ,9 ];
    puz[64] = [21,21,21,21,14];
    puz[65] = [14,2 ,14,8 ,14];
    puz[66] = [31,17,21,17,31];
    puz[67] = [21,0 ,21,0 ,21];
    puz[68] = [10,21,14,21,10];
    puz[69] = [21,0 ,0 ,0 ,21];
    puz[70] = [31,29,27,23,31];
    puz[71] = [31,4 ,31,17,17];
    puz[72] = [27,10,27,10,27];
    puz[73] = [4 ,10,31,17,31];
    puz[74] = [17,27,21,17,17];
    puz[75] = [31,21,31,21,31];
    puz[76] = [14,4 ,4 ,4 ,14];
    puz[77] = [14,10,31,14,27];
    puz[78] = [0 ,0 ,4 ,0 ,0 ];
    puz[79] = [17,0 ,4 ,0 ,17];
    puz[80] = [27,27,0 ,27,27];
    puz[81] = [10,0 ,17,14,4 ];
    puz[82] = [21,14,27,14,21];
    puz[83] = [17,19,21,25,17];
    puz[84] = [21,21,27,21,21];
    puz[85] = [4 ,4 ,14,21,21];
    puz[86] = [21,21,21,21,31];
    puz[87] = [0 ,14,14,14,0 ];
    puz[88] = [4 ,10,17,31,17];
    puz[89] = [21,10,21,10,21];
    puz[90] = [17,14,10,14,17];
    puz[91] = [4 ,10,17,10,4 ];
    puz[92] = [21,0 ,10,0 ,21];
    puz[93] = [10,31,10,31,10];
    puz[94] = [31,21,31,29,31];
    puz[95] = [17,10,4 ,10,17];
    puz[96] = [31,4 ,31,4 ,31];
    puz[97] = [31,14,4 ,14,31];
    puz[98] = [4 ,21,31,21,4 ];
    puz[99] = [31,31,31,31,31];
    this.puzzles = puz;

    let solve = [];
    solve[0] = [15, 20, 17, 22, 19, 24];
    solve[1] = [5, 15, 7, 17, 9, 19];
    solve[2] = [10, 2, 7, 17, 22, 14];
    solve[3] = [10, 11, 21, 13, 23, 14];
    solve[4] = [10, 20, 1, 8, 13, 24];
    solve[5] = [10, 6, 2, 7, 22, 8, 14];
    solve[6] = [5, 15, 11, 2, 12, 22, 14];
    solve[7] = [20, 21, 12, 17, 22, 23, 24];
    solve[8] = [20, 6, 16, 12, 22, 8, 18];
    solve[9] = [0, 1, 6, 7, 3, 8, 4];
    solve[10] = [0, 10, 6, 7, 22, 8, 4, 14];
    solve[11] = [0, 10, 16, 7, 12, 18, 4, 14];
    solve[12] = [5, 10, 1, 2, 22, 23, 14, 19];
    solve[13] = [12, 17, 22, 8, 18, 4, 9, 14];
    solve[14] = [7, 17, 3, 8, 18, 23, 9, 19];
    solve[15] = [20, 1, 6, 11, 7, 17, 13, 18, 19];
    solve[16] = [10, 15, 6, 2, 7, 22, 8, 14, 19];
    solve[17] = [10, 6, 16, 2, 12, 22, 8, 18, 14];
    solve[18] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    solve[19] = [0, 10, 20, 1, 21, 7, 12, 17, 13];
    solve[20] = [20, 16, 21, 2, 7, 17, 3, 13, 4, 9];
    solve[21] = [0, 15, 1, 21, 2, 7, 13, 14, 19, 24];
    solve[22] = [15, 20, 11, 7, 12, 22, 3, 18, 4, 14];
    solve[23] = [0, 5, 16, 2, 7, 12, 8, 18, 14, 24];
    solve[24] = [0, 11, 16, 2, 12, 17, 3, 9, 14, 24];
    solve[25] = [0, 5, 10, 1, 11, 21, 7, 12, 22, 9, 24];
    solve[26] = [0, 1, 6, 2, 7, 12, 8, 13, 23, 14, 24];
    solve[27] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 18, 23];
    solve[28] = [10, 6, 11, 16, 2, 7, 22, 8, 23, 14, 19];
    solve[29] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    solve[30] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    solve[31] = [0, 15, 20, 6, 11, 21, 2, 22, 18, 23, 9, 14];
    solve[32] = [10, 20, 6, 16, 2, 7, 12, 17, 18, 23, 19, 24];
    solve[33] = [20, 6, 11, 16, 21, 2, 12, 8, 18, 9, 14, 19];
    solve[34] = [0, 1, 6, 11, 16, 2, 12, 22, 8, 23, 4, 19];
    solve[35] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    solve[36] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    solve[37] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    solve[38] = [5, 10, 1, 6, 11, 16, 2, 12, 8, 18, 4, 9, 14];
    solve[39] = [0, 20, 1, 6, 16, 21, 2, 12, 22, 8, 13, 18, 14];
    solve[40] = [10, 15, 20, 1, 6, 16, 7, 12, 8, 13, 18, 23, 4, 19];
    solve[41] = [0, 10, 15, 6, 11, 16, 2, 12, 17, 8, 18, 14, 19, 24];
    solve[42] = [5, 10, 6, 11, 16, 2, 12, 17, 3, 8, 18, 4, 9, 14];
    solve[43] = [5, 10, 1, 6, 11, 16, 7, 12, 8, 18, 23, 4, 9, 24];
    solve[44] = [15, 20, 6, 11, 16, 21, 12, 17, 22, 3, 8, 18, 4, 19];
    solve[45] = [0, 15, 1, 6, 16, 21, 2, 7, 12, 8, 13, 18, 14, 19, 24];
    solve[46] = [0, 10, 1, 6, 16, 2, 7, 12, 22, 8, 13, 18, 23, 19, 24];
    solve[47] = [0, 10, 15, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 19, 24];
    solve[48] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    solve[49] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    solve[50] = [0, 10, 20, 4, 14, 24];
    solve[51] = [1, 21, 7, 17, 3, 23];
    solve[52] = [1, 21, 13, 4, 14, 24];
    solve[53] = [5, 15, 1, 3, 9, 19];
    solve[54] = [5, 1, 6, 18, 23, 19];
    solve[55] = [10, 2, 7, 12, 17, 22, 14];
    solve[56] = [5, 20, 7, 12, 22, 9, 24];
    solve[57] = [0, 5, 11, 2, 3, 8, 4];
    solve[58] = [0, 20, 1, 6, 16, 2, 13, 23, 4, 14, 24];
    solve[59] = [10, 21, 12, 17, 22, 23, 14];
    solve[60] = [5, 10, 20, 2, 17, 9, 14, 24];
    solve[61] = [0, 20, 6, 16, 8, 18, 4, 24];
    solve[62] = [2, 7, 12, 22, 3, 8, 13, 9];
    solve[63] = [10, 1, 21, 7, 22, 3, 8, 4];
    solve[64] = [0, 10, 6, 7, 22, 8, 4, 14];
    solve[65] = [10, 15, 6, 21, 12, 3, 18, 9, 14];
    solve[66] = [5, 15, 11, 2, 12, 22, 13, 9, 19];
    solve[67] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    solve[68] = [10, 11, 2, 7, 12, 17, 22, 13, 14];
    solve[69] = [5, 10, 20, 7, 12, 22, 9, 14, 24];
    solve[70] = [10, 15, 1, 11, 16, 8, 13, 23, 9, 14];
    solve[71] = [1, 11, 16, 21, 12, 17, 18, 4, 14, 24];
    solve[72] = [5, 15, 6, 11, 16, 8, 13, 18, 9, 19];
    solve[73] = [5, 20, 1, 6, 8, 13, 23, 4, 9, 14];
    solve[74] = [0, 10, 6, 21, 17, 22, 8, 23, 4, 14];
    solve[75] = [0, 5, 10, 1, 11, 21, 2, 7, 12, 9, 24];
    solve[76] = [0, 10, 15, 1, 21, 2, 7, 12, 13, 19, 24];
    solve[77] = [5, 10, 1, 11, 16, 21, 22, 18, 4, 9, 24];
    solve[78] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    solve[79] = [0, 5, 1, 11, 21, 7, 12, 22, 9, 14, 24];
    solve[80] = [5, 10, 15, 6, 11, 16, 8, 13, 18, 9, 14, 19];
    solve[81] = [0, 10, 15, 20, 1, 11, 16, 2, 12, 18, 23, 19];
    solve[82] = [5, 15, 6, 11, 16, 2, 22, 8, 13, 18, 9, 19];
    solve[83] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    solve[84] = [5, 10, 15, 6, 16, 2, 22, 8, 18, 9, 14, 19];
    solve[85] = [0, 15, 1, 6, 11, 2, 7, 12, 8, 23, 14, 19, 24];
    solve[86] = [0, 5, 20, 1, 6, 2, 7, 12, 8, 13, 23, 9, 14];
    solve[87] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    solve[88] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    solve[89] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    solve[90] = [0, 5, 10, 1, 6, 16, 21, 2, 17, 8, 13, 18, 9, 24];
    solve[91] = [0, 15, 1, 6, 16, 21, 2, 7, 8, 13, 18, 14, 19, 24];
    solve[92] = [0, 5, 10, 1, 6, 16, 21, 2, 7, 8, 13, 18, 9, 24];
    solve[93] = [0, 10, 15, 1, 6, 16, 21, 7, 22, 8, 13, 18, 19, 24];
    solve[94] = [0, 11, 16, 21, 7, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    solve[95] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    solve[96] = [0, 5, 10, 1, 6, 11, 16, 21, 12, 17, 22, 8, 18, 9, 24];
    solve[97] = [0, 5, 10, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 24];
    solve[98] = [0, 10, 15, 1, 6, 11, 16, 21, 2, 7, 12, 8, 18, 19, 24];
    solve[99] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    this.solutions = solve;

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

  routerAnimationStarted($event: AnimationTransitionEvent) {
    if ($event.toState === 'void') {
      this.soundService.playTransitionSound();
      this.gameState.isRouteLeaveAnimationInProgress = true;
    }
  }

  routerAnimationDone($event: AnimationTransitionEvent) {
    if ($event.toState === 'void') {
      this.gameState.isRouteLeaveAnimationInProgress = false;
    }
  }

  showMenu () {
    this.router.navigate(['/']);
  }

  initSquares (level) {
    let levelData = this.puzzles[level - 1];
    let i = 0, row = 0, len = 25;
    this.squares.length = 0;
    for (; i < len; i=i+5, row++) {
      this.squares.push({ id: i,   selected: !(levelData[row] & 1) });
      this.squares.push({ id: i+1, selected: !(levelData[row] & 2) });
      this.squares.push({ id: i+2, selected: !(levelData[row] & 4) });
      this.squares.push({ id: i+3, selected: !(levelData[row] & 8) });
      this.squares.push({ id: i+4, selected: !(levelData[row] & 16) });
    }
    // init. the state of squares according to selected value
    this.squares.map((square) => {
      square.state = this.getStateWithRandomNum(square.selected ? 'selected' : 'unselected');
      return square;
    });
  }

  squareTrackByFn(index, square) {
    return square.id;
  }

  getStateWithRandomNum(state) {
      return state + this.getRandomInt(1, 3);
  }

  // Returns a random integer between min (inclusive) and max (exclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  initBoard () {
    if (this.isOnInitTriggered) {
      this.soundService.playFlipSound();
    }

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

  indexToCoords (index) {
    return {row: Math.floor(index / 5), col: (index % 5)};
  }

  coordsToIndex (coords) {
    return (coords.row * 5) + coords.col;
  }

  adjustedCoords (coords, rowDiff, colDiff) {
    return {
      row: coords.row + rowDiff,
      col: coords.col + colDiff
    };
  }

  calcSquaresToToggle (index) {
    let indexes = [ index ];
    let coords = this.indexToCoords(index);
    if (coords.col < 4) {
      indexes.push(this.coordsToIndex(this.adjustedCoords(coords, 0, +1)));
    }
    if (coords.col > 0) {
      indexes.push(this.coordsToIndex(this.adjustedCoords(coords, 0, -1)));
    }
    if (coords.row < 4) {
      indexes.push(this.coordsToIndex(this.adjustedCoords(coords, +1, 0)));
    }
    if (coords.row > 0) {
      indexes.push(this.coordsToIndex(this.adjustedCoords(coords, -1, 0)));
    }
    return indexes;
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
    this.gameState.isLevelLocked = (selectedLevel > (this.bestSolutions.length + 1));

    let isLevelSolved = this.isLevelPreviouslySolved(selectedLevel);

    this.gameState.isLevelSolved = isLevelSolved;
    this.gameState.bestSolution = isLevelSolved ? this.bestSolutions[selectedLevel - 1] : 999;

    let numStarsEarned = this.calcNumStarsEarned(this.gameState.selectedLevel, this.gameState.bestSolution);
    this.gameState.starsEarned[0].earned = (numStarsEarned > 0);
    this.gameState.starsEarned[1].earned = (numStarsEarned > 1);
    this.gameState.starsEarned[2].earned = (numStarsEarned > 2);
  }

  gameLost () {
    this.soundService.playLostSound();

    this.showModal({
      title: "No Moves Left!",
      message: "I know you can do this. Give it another go?",
      okText: "Retry",
      okHandler: this.closeModalAndExecFn(this.replay),
      cancelText: "Quit",
      cancelHandler: this.closeModalAndExecFn(this.showMenu)
    });
  }

  isLevelPreviouslySolved (level) {
    return (level <= this.bestSolutions.length);
  }

  updateBestSolutions () {
    if (this.gameState.movesTaken < this.gameState.bestSolution) {
      this.gameState.bestSolution = this.gameState.movesTaken;
      if (this.isLevelPreviouslySolved(this.gameState.selectedLevel)) {
        this.bestSolutions[this.gameState.selectedLevel-1] = this.gameState.bestSolution;
      } else {
        this.bestSolutions.push(this.gameState.bestSolution);
      }
    }
  }

  gameWon () {
    this.soundService.playWonSound();

    this.updateBestSolutions();
    this.showModal({
      title: "Level Solved",
      message: "You are awesome! Ready for the next level?",
      okText: "Next Level",
      okHandler: this.closeModalAndExecFn(this.selectNextLevel),
      cancelText: "Replay",
      cancelHandler: this.closeModalAndExecFn(this.replay)
    });
  }

  calcNumStarsEarned (level, playersSolution) {
    let bestSolution = this.solutions[level-1].length;
    if (playersSolution === bestSolution) {
      return 3;
    } else if (playersSolution <= (bestSolution + 4)) {
      return 2;
    } else {
      return 1;
    }
  }

  clickSquare (index) {
    this.soundService.playFlipSound();

    let toggleIndexes = this.calcSquaresToToggle(index),
      i = 0,
      len = toggleIndexes.length;
    for (; i<len; i++) {
      let toggleIndex = toggleIndexes[i];
      this.gameState.squares[toggleIndex].selected = !this.gameState.squares[toggleIndex].selected;
      this.gameState.squares[toggleIndex].state = this.getStateWithRandomNum(this.gameState.squares[toggleIndex].selected ? 'selected' : 'unselected');
    }
    this.gameState.movesTaken = this.gameState.movesTaken + 1;
    this.gameState.movesLeft = this.gameState.movesLeft - 1;

    if (this.isGameWon()) {
      this.gameWon();
    }
    else if (this.gameState.movesLeft === 0) {
      this.gameLost();
    }
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }

  mouseEnterSquare (squareIndex) {
    this.soundService.playHoverSound();

    this.setSquareHoverState(squareIndex, true);
  }

  mouseLeaveSquare (squareIndex) {
    this.setSquareHoverState(squareIndex, false);
  }

  setSquareHoverState (squareIndex, isHover) {
    let toggleIndexes = this.calcSquaresToToggle(squareIndex),
      i = 0,
      len = toggleIndexes.length;
    for (; i < len; i++) {
      let toggleIndex = toggleIndexes[i];
      this.gameState.squares[toggleIndex].hover = isHover;
    }
  }

}
