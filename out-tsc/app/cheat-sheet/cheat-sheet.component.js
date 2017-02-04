var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PuzzleService } from "../services/puzzle.service";
var DUPLICATE_LEVELS = [65, 68, 79, 84, 89, 88, 90, 96, 100];
export var CheatSheetComponent = (function () {
    function CheatSheetComponent(puzzleService) {
        this.puzzleService = puzzleService;
    }
    CheatSheetComponent.prototype.ngOnInit = function () {
        this.initPuzzles();
    };
    CheatSheetComponent.prototype.initPuzzles = function () {
        this.puzzles = [];
        for (var level = 1; level <= 100; level++) {
            var squares = this.getSquares(level);
            var numRedTiles = this.getNumRedTiles(squares);
            var numMoves = this.getNumMoves(squares);
            this.puzzles.push({
                level: level,
                squares: squares,
                numRedTiles: numRedTiles,
                numMoves: numMoves,
                isDuplicate: this.isDuplicate(level)
            });
        }
        //this.sortPuzzles();
    };
    /*
        sortPuzzles: Sort by numMoves ascending, then by numRedTiles ascending
    */
    CheatSheetComponent.prototype.sortPuzzles = function () {
        this.puzzles.sort(function (a, b) {
            if (a.numMoves !== b.numMoves) {
                return a.numMoves - b.numMoves;
            }
            else {
                return a.numRedTiles - b.numRedTiles;
            }
        });
    };
    CheatSheetComponent.prototype.getSquares = function (level) {
        var puzzle = this.puzzleService.getPuzzle(level);
        var solution = this.puzzleService.getSolution(level);
        var i = 0, row = 0, len = 25;
        var squares = [];
        for (; i < len; i = i + 5, row++) {
            squares.push({ id: i, selected: !(puzzle[row] & 1), highlighted: solution.indexOf(i) >= 0 });
            squares.push({ id: i + 1, selected: !(puzzle[row] & 2), highlighted: solution.indexOf(i + 1) >= 0 });
            squares.push({ id: i + 2, selected: !(puzzle[row] & 4), highlighted: solution.indexOf(i + 2) >= 0 });
            squares.push({ id: i + 3, selected: !(puzzle[row] & 8), highlighted: solution.indexOf(i + 3) >= 0 });
            squares.push({ id: i + 4, selected: !(puzzle[row] & 16), highlighted: solution.indexOf(i + 4) >= 0 });
        }
        return squares;
    };
    CheatSheetComponent.prototype.getNumRedTiles = function (squares) {
        return squares.filter(function (square) { return !square.selected; }).length;
    };
    CheatSheetComponent.prototype.getNumMoves = function (squares) {
        return squares.filter(function (square) { return square.highlighted; }).length;
    };
    CheatSheetComponent.prototype.isDuplicate = function (level) {
        return DUPLICATE_LEVELS.indexOf(level) >= 0;
    };
    CheatSheetComponent = __decorate([
        Component({
            selector: 'app-cheat-sheet',
            templateUrl: './cheat-sheet.component.html',
            styleUrls: ['./cheat-sheet.component.less']
        }), 
        __metadata('design:paramtypes', [PuzzleService])
    ], CheatSheetComponent);
    return CheatSheetComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/cheat-sheet/cheat-sheet.component.js.map