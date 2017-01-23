import {
  Component, trigger, state, style, transition, animate, OnChanges, SimpleChanges,
  EventEmitter, Output
} from '@angular/core';
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";

@Component({
  selector: 'app-board',
  inputs: [
    'isLevelLocked',
    'isShowSolved',
    'starsEarned',
    'squares'
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
  animations: [
    routerTransition(),
    trigger('fadeIn', [
      state('in', style({})),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms')
      ])
    ])
  ]
})
export class BoardComponent implements OnChanges {

  @Output() onClicked = new EventEmitter();
  private isOnInitTriggered: boolean;
  private boardRows = [];
  private boardAnim = '';
  private squares;

  constructor(private soundService: SoundService) {
    this.isOnInitTriggered = false;
  }

  ngOnInit() {
    this.isOnInitTriggered = true;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['squares']) {
      let squares = changes['squares'].currentValue;

      if (this.isOnInitTriggered) {
        this.soundService.playFlipSound();
      }
      this.shakeBoardForReset();

      // init. board rows
      this.boardRows = [];
      for (let row=0; row<5; row++) {
        let j = row * 5;
        this.boardRows.push(squares.slice(j, j+5));
      }
    }
  }

  boardRowTrackByFn(index) {
    return index;
  }

  squareTrackByFn(index, square) {
    return square.id;
  }

  getSquareIndex (row, col) {
    return (row * 5) + col;
  }

  mouseEnterSquare (row, col) {
    let squareIndex = this.getSquareIndex(row, col);
    this.soundService.playBlipSound();

    this.setSquareHoverState(squareIndex, true);
  }

  mouseLeaveSquare (row, col) {
    let squareIndex = this.getSquareIndex(row, col);
    this.setSquareHoverState(squareIndex, false);
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

  setSquareHoverState (squareIndex, isHover) {
    let toggleIndexes = this.calcSquaresToToggle(squareIndex),
      i = 0,
      len = toggleIndexes.length;
    for (; i < len; i++) {
      let toggleIndex = toggleIndexes[i];
      this.squares[toggleIndex].hover = isHover;
    }
  }

  shakeBoardForReset() {
    this.startAnimatingBoard('shake');
  }

  shrinkBoardForClickedSquare () {
    this.startAnimatingBoard('shrink');
  }

  startAnimatingBoard(animName) {
    this.boardAnim = animName;
    setTimeout(() => { this.stopAnimatingBoard() }, 400 );
  }

  stopAnimatingBoard() {
    this.boardAnim = '';
  }

  // Returns a random integer between min (inclusive) and max (exclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getStateWithRandomNum(state) {
    return state + this.getRandomInt(1, 3);
  }

  clickSquare (row, col) {
    this.shrinkBoardForClickedSquare();
    let index = this.getSquareIndex(row,col);
    this.soundService.playFlipSound();

    let toggleIndexes = this.calcSquaresToToggle(index),
      i = 0,
      len = toggleIndexes.length;
    for (; i<len; i++) {
      let toggleIndex = toggleIndexes[i];
      this.squares[toggleIndex].selected = !this.squares[toggleIndex].selected;
      this.squares[toggleIndex].state = this.getStateWithRandomNum(this.squares[toggleIndex].selected ? 'selected' : 'unselected');
    }
    this.onClicked.emit();
  }

}
