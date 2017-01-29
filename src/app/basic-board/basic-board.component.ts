import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basic-board',
  inputs: [
    'squares'
  ],
  templateUrl: './basic-board.component.html',
  styleUrls: ['./basic-board.component.less']
})
export class BasicBoardComponent implements OnChanges {

  private boardRows = [];
  private squares;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['squares']) {
      let squares = changes['squares'].currentValue;

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

}
