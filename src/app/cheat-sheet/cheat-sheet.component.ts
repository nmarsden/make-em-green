import { Component, OnInit } from '@angular/core';
import { PuzzleService } from "../services/puzzle.service";

const DUPLICATE_LEVELS = [65, 68, 79, 84, 89, 88, 90, 96, 100];

@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.less']
})
export class CheatSheetComponent implements OnInit {

  private puzzles;

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.initPuzzles();
  }

  initPuzzles() {
    this.puzzles = [];
    for (let level=1; level<=100; level++) {
      let squares = this.getSquares(level);
      let numRedTiles = this.getNumRedTiles(squares);
      let numMoves = this.getNumMoves(squares);

      this.puzzles.push({
        level: level,
        squares: squares,
        numRedTiles: numRedTiles,
        numMoves: numMoves,
        isDuplicate: this.isDuplicate(level)
      });
    }

    //this.sortPuzzles();
  }

  /*
      sortPuzzles: Sort by numMoves ascending, then by numRedTiles ascending
  */
  sortPuzzles() {
    this.puzzles.sort((a, b) => {
      if (a.numMoves !== b.numMoves) {
        return a.numMoves - b.numMoves;
      } else {
        return a.numRedTiles - b.numRedTiles;
      }
    });
  }

  getSquares (level) {
    let puzzle = this.puzzleService.getPuzzle(level);
    let solution = this.puzzleService.getSolution(level);
    let i = 0, row = 0, len = 25;
    let squares = [];
    for (; i < len; i=i+5, row++) {
      squares.push({ id: i,   selected: !(puzzle[row] & 1),  highlighted: solution.indexOf(i) >= 0 });
      squares.push({ id: i+1, selected: !(puzzle[row] & 2),  highlighted: solution.indexOf(i+1) >= 0 });
      squares.push({ id: i+2, selected: !(puzzle[row] & 4),  highlighted: solution.indexOf(i+2) >= 0 });
      squares.push({ id: i+3, selected: !(puzzle[row] & 8),  highlighted: solution.indexOf(i+3) >= 0 });
      squares.push({ id: i+4, selected: !(puzzle[row] & 16), highlighted: solution.indexOf(i+4) >= 0 });
    }
    return squares;
  }

  getNumRedTiles(squares) {
    return squares.filter((square) => { return !square.selected; }).length;
  }

  getNumMoves(squares) {
    return squares.filter((square) => { return square.highlighted; }).length;
  }

  isDuplicate(level) {
    return DUPLICATE_LEVELS.indexOf(level) >= 0;
  }
}
