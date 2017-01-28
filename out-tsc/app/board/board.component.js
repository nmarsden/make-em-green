var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, style, transition, animate, EventEmitter, Output } from '@angular/core';
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";
export var BoardComponent = (function () {
    function BoardComponent(soundService) {
        this.soundService = soundService;
        this.onClicked = new EventEmitter();
        this.boardRows = [];
        this.boardAnim = '';
        this.isOnInitTriggered = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.isOnInitTriggered = true;
    };
    BoardComponent.prototype.ngOnChanges = function (changes) {
        if (changes['squares']) {
            var squares = changes['squares'].currentValue;
            if (this.isOnInitTriggered) {
                this.soundService.playFlipSound();
            }
            this.shakeBoardForReset();
            // init. board rows
            this.boardRows = [];
            for (var row = 0; row < 5; row++) {
                var j = row * 5;
                this.boardRows.push(squares.slice(j, j + 5));
            }
        }
    };
    BoardComponent.prototype.boardRowTrackByFn = function (index) {
        return index;
    };
    BoardComponent.prototype.squareTrackByFn = function (index, square) {
        return square.id;
    };
    BoardComponent.prototype.getSquareIndex = function (row, col) {
        return (row * 5) + col;
    };
    BoardComponent.prototype.mouseEnterSquare = function (row, col) {
        var squareIndex = this.getSquareIndex(row, col);
        this.soundService.playBlipSound();
        this.setSquareHoverState(squareIndex, true);
    };
    BoardComponent.prototype.mouseLeaveSquare = function (row, col) {
        var squareIndex = this.getSquareIndex(row, col);
        this.setSquareHoverState(squareIndex, false);
    };
    BoardComponent.prototype.indexToCoords = function (index) {
        return { row: Math.floor(index / 5), col: (index % 5) };
    };
    BoardComponent.prototype.coordsToIndex = function (coords) {
        return (coords.row * 5) + coords.col;
    };
    BoardComponent.prototype.adjustedCoords = function (coords, rowDiff, colDiff) {
        return {
            row: coords.row + rowDiff,
            col: coords.col + colDiff
        };
    };
    BoardComponent.prototype.calcSquaresToToggle = function (index) {
        var indexes = [index];
        var coords = this.indexToCoords(index);
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
    };
    BoardComponent.prototype.setSquareHoverState = function (squareIndex, isHover) {
        var toggleIndexes = this.calcSquaresToToggle(squareIndex), i = 0, len = toggleIndexes.length;
        for (; i < len; i++) {
            var toggleIndex = toggleIndexes[i];
            this.squares[toggleIndex].hover = isHover;
        }
    };
    BoardComponent.prototype.shakeBoardForReset = function () {
        this.startAnimatingBoard('shake');
    };
    BoardComponent.prototype.shrinkBoardForClickedSquare = function () {
        this.startAnimatingBoard('shrink');
    };
    BoardComponent.prototype.startAnimatingBoard = function (animName) {
        var _this = this;
        this.boardAnim = animName;
        setTimeout(function () { _this.stopAnimatingBoard(); }, 400);
    };
    BoardComponent.prototype.stopAnimatingBoard = function () {
        this.boardAnim = '';
    };
    BoardComponent.prototype.clickSquare = function (row, col) {
        this.shrinkBoardForClickedSquare();
        var index = this.getSquareIndex(row, col);
        this.soundService.playFlipSound();
        var toggleIndexes = this.calcSquaresToToggle(index), i = 0, len = toggleIndexes.length;
        for (; i < len; i++) {
            var toggleIndex = toggleIndexes[i];
            this.squares[toggleIndex].selected = !this.squares[toggleIndex].selected;
        }
        this.onClicked.emit({ tileIndex: index });
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], BoardComponent.prototype, "onClicked", void 0);
    BoardComponent = __decorate([
        Component({
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
        }), 
        __metadata('design:paramtypes', [SoundService])
    ], BoardComponent);
    return BoardComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/board/board.component.js.map