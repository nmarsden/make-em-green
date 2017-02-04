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
export var BasicBoardComponent = (function () {
    function BasicBoardComponent() {
        this.boardRows = [];
    }
    BasicBoardComponent.prototype.ngOnChanges = function (changes) {
        if (changes['squares']) {
            var squares = changes['squares'].currentValue;
            // init. board rows
            this.boardRows = [];
            for (var row = 0; row < 5; row++) {
                var j = row * 5;
                this.boardRows.push(squares.slice(j, j + 5));
            }
        }
    };
    BasicBoardComponent.prototype.boardRowTrackByFn = function (index) {
        return index;
    };
    BasicBoardComponent.prototype.squareTrackByFn = function (index, square) {
        return square.id;
    };
    BasicBoardComponent = __decorate([
        Component({
            selector: 'app-basic-board',
            inputs: [
                'squares'
            ],
            templateUrl: './basic-board.component.html',
            styleUrls: ['./basic-board.component.less']
        }), 
        __metadata('design:paramtypes', [])
    ], BasicBoardComponent);
    return BasicBoardComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/basic-board/basic-board.component.js.map