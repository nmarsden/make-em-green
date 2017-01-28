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
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";
import { Router } from "@angular/router";
export var TutorialComponent = (function () {
    function TutorialComponent(router, soundService) {
        var _this = this;
        this.router = router;
        this.soundService = soundService;
        this.currentLesson = 1;
        this.lessons = [
            {
                title: 'Welcome',
                content: "These lessons will teach you how to play Make 'em Green.",
                demo: function () {
                    _this.setupBoard([6, 8, 16, 17, 18]);
                },
                instructionsEnd: "Let's get started. Click Next to continue."
            },
            {
                title: 'Levels',
                content: 'Each level consists of various red and green tiles on a 5 x 5 board.',
                demo: function () {
                    _this.setupBoardWithCheckerPattern();
                },
                instructionsEnd: "This board shows one possible combination of red and green tiles.  It just happens to be a 'checker' pattern"
            },
            {
                title: 'Goal',
                content: "Completing a level requires the board to have all 'green' tiles.  Hence the name Make 'em Green :)",
                demo: function () {
                    _this.setupBoard([]);
                },
                instructionsEnd: "This is what a completed board looks like."
            },
            {
                title: 'Changing Colours',
                content: "A tile changes colour when clicked.  Either changing from 'red' to 'green', or from 'green' to 'red'.",
                demo: function () {
                    _this.setupBoardWithCheckerPattern([12]);
                },
                instructionsStart: "Click the center tile to change it from red to green.",
                boardClicked: this.checkForTileClickedHandler(12)
            },
            {
                title: 'Tricky Part',
                content: "But, here's the tricky part. Tiles on adjacent edges of the clicked tile also change colour.",
                demo: function () {
                    _this.setupBoardWithCheckerPattern([7, 11, 12, 13, 17]);
                },
                instructionsStart: "Click the 'red' center tile and notice the four surrounding tiles also change colour.",
                boardClicked: this.checkForTileClickedHandler(12)
            },
            {
                title: 'Changing Four Tiles',
                content: "Clicking a tile on the side of the board (excluding corners) will change the colour of 4 tiles",
                demo: function () {
                    _this.setupBoardWithCheckerPattern([9, 13, 14, 19]);
                },
                instructionsStart: "Click the 'red' side tile and notice the three surrounding tiles also change colour.",
                boardClicked: this.checkForTileClickedHandler(14)
            },
            {
                title: 'Changing Three Tiles',
                content: "Clicking a corner tile on the board will change the colour of 3 tiles",
                demo: function () {
                    _this.setupBoardWithCheckerPattern([19, 23, 24]);
                },
                instructionsStart: "Click the 'red' corner tile and notice the two surrounding tiles also change colour.",
                boardClicked: this.checkForTileClickedHandler(24)
            },
            {
                title: 'Practice I',
                content: "Try solving the board below.",
                hint: 'It requires one move.',
                demo: function () {
                    _this.setupBoard([7, 11, 12, 13, 17]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice II',
                content: "Try solving the board below.",
                hint: 'It requires two moves.',
                demo: function () {
                    _this.setupBoard([5, 9, 10, 11, 13, 14, 15, 19]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice III',
                content: "Try solving the board below.",
                hint: 'It requires three move.',
                demo: function () {
                    _this.setupBoard([0, 1, 5, 7, 11, 12, 13, 17, 19, 23, 24]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice IV',
                content: "Try solving the board below.",
                hint: 'It requires two moves.',
                demo: function () {
                    _this.setupBoard([7, 9, 11, 12, 14, 17, 19]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice V',
                content: "Try solving the board below.",
                hint: 'It requires two moves.',
                demo: function () {
                    _this.setupBoard([7, 8, 11, 14, 17, 18]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice VI',
                content: "Try solving the board below.",
                hint: 'It requires two moves.',
                demo: function () {
                    _this.setupBoard([13, 17, 18, 24]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice VII',
                content: "Try solving the board below.",
                hint: 'It requires three moves.',
                demo: function () {
                    _this.setupBoard([5, 7, 9, 10, 12, 14, 15, 17, 19]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice VIII',
                content: "Try solving the board below.",
                hint: 'It requires four moves.',
                demo: function () {
                    _this.setupBoard([3, 4, 5, 10, 11, 13, 14, 15, 23, 24]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice IX',
                content: "Try solving the board below.",
                hint: 'It requires four moves.',
                demo: function () {
                    _this.setupBoard([1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Practice X',
                content: "Try solving the board below.",
                hint: 'It requires five moves.',
                demo: function () {
                    _this.setupBoard([1, 2, 3, 5, 9, 10, 12, 14, 15, 19, 21, 22, 23]);
                },
                boardClicked: this.checkForGameWonHandler()
            },
            {
                title: 'Final',
                content: "That concludes the tutorial.  You're ready to start playing Make 'em Green",
                demo: function () {
                    _this.squares = [];
                }
            }
        ];
        this.squares = [];
        this.isShowSection = false;
        this.isShowInstructionsStart = false;
        this.isShowInstructionsEnd = false;
        this.isLessonCompleted = false;
        this.setupLesson();
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.setupLesson = function () {
        // Clear the completed lesson flag
        this.isLessonCompleted = false;
        // Copy current lesson into lesson
        this.lesson = Object.assign({}, this.lessons[this.currentLesson - 1]);
        // Default to an empty boardClicked callback when undefined
        if (typeof this.lesson.boardClicked === 'undefined') {
            this.lesson.boardClicked = function () { };
        }
        this.showSection();
        // Setup board
        this.lesson.demo();
        // Show instructions
        if (this.lesson.instructionsStart) {
            this.showStartInstructions();
        }
        else if (this.lesson.instructionsEnd) {
            this.showEndInstructions(3000);
        }
    };
    TutorialComponent.prototype.showSection = function () {
        this.isShowSection = true;
    };
    TutorialComponent.prototype.hideSection = function () {
        this.isShowSection = false;
    };
    TutorialComponent.prototype.showStartInstructions = function () {
        var _this = this;
        this.hideInstructions();
        // show the start instructions after 3 secs
        this.instructionsBubbleTimeoutId = setTimeout(function () {
            _this.isShowInstructionsStart = true;
        }, 3000);
    };
    TutorialComponent.prototype.showEndInstructions = function (delayInMsecs) {
        var _this = this;
        this.hideInstructions();
        // show the end instructions after delay
        this.instructionsBubbleTimeoutId = setTimeout(function () {
            _this.isShowInstructionsEnd = true;
        }, delayInMsecs);
    };
    TutorialComponent.prototype.hideInstructions = function () {
        // Clear instructions bubble timeout
        clearTimeout(this.instructionsBubbleTimeoutId);
        // Hide instructions
        this.isShowInstructionsStart = false;
        this.isShowInstructionsEnd = false;
    };
    TutorialComponent.prototype.nextLesson = function () {
        var _this = this;
        if (this.currentLesson < this.lessons.length) {
            this.hideSection();
            this.hideInstructions();
            // Show next lesson after 0.3 secs
            setTimeout(function () {
                _this.currentLesson += 1;
                _this.setupLesson();
            }, 300);
        }
    };
    TutorialComponent.prototype.setupBoardWithCheckerPattern = function (enabled) {
        if (enabled === void 0) { enabled = undefined; }
        var selected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
        this.setupBoard(selected, enabled);
    };
    TutorialComponent.prototype.setupBoard = function (selected, enabled) {
        if (enabled === void 0) { enabled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; }
        this.squares = [];
        for (var i = 0; i < 25; i++) {
            this.squares.push({
                id: i,
                selected: selected.indexOf(i) < 0,
                disabled: enabled.indexOf(i) < 0
            });
        }
    };
    TutorialComponent.prototype.checkForGameWonHandler = function () {
        var _this = this;
        return function () {
            if (!_this.isLessonCompleted && _this.isGameWon()) {
                _this.isLessonCompleted = true;
                _this.lesson.instructionsEnd = "Well done!";
                _this.showEndInstructions(300);
            }
        };
    };
    TutorialComponent.prototype.checkForTileClickedHandler = function (requiredTileIndex) {
        var _this = this;
        return function (event) {
            if (!_this.isLessonCompleted && event.tileIndex === requiredTileIndex) {
                _this.isLessonCompleted = true;
                _this.lesson.instructionsEnd = "Well done!";
                _this.showEndInstructions(300);
            }
        };
    };
    TutorialComponent.prototype.isGameWon = function () {
        var i = 0, len = this.squares.length;
        for (; i < len; i++) {
            if (!this.squares[i].selected) {
                return false;
            }
        }
        return true;
    };
    TutorialComponent.prototype.playBlipSound = function () {
        this.soundService.playBlipSound();
    };
    TutorialComponent.prototype.showSelectLevel = function () {
        this.soundService.playTransitionSound();
        this.router.navigate(['/select-level']);
    };
    TutorialComponent = __decorate([
        Component({
            selector: 'app-tutorial',
            templateUrl: './tutorial.component.html',
            styleUrls: ['./tutorial.component.less'],
            host: {
                '[@routerTransition]': '',
                '[style.display]': "'block'"
            },
            animations: [
                routerTransition()
            ]
        }), 
        __metadata('design:paramtypes', [Router, SoundService])
    ], TutorialComponent);
    return TutorialComponent;
}());
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/tutorial/tutorial.component.js.map