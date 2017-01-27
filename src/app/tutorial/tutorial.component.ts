import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";
import { Router } from "@angular/router";

@Component({
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
})
export class TutorialComponent implements OnInit {

  private currentLesson = 1;
  private lesson;
  private lessons = [
    {
      title: 'Welcome',
      content: `These lessons will teach you how to play Make 'em Green.`,
      demo: () => {
        this.setupBoard([6, 8, 16, 17, 18]);
      },
      instructionsEnd: `Let's get started. Click Next to continue.`
    },
    {
      title: 'Levels',
      content: 'Each level consists of various red and green tiles on a 5 x 5 board.',
      demo: () => {
        this.setupBoardWithCheckerPattern();
      },
      instructionsEnd: `This board shows one possible combination of red and green tiles.  It just happens to be a 'checker' pattern`
    },
    {
      title: 'Goal',
      content: `Completing a level requires the board to have all 'green' tiles.  Hence the name Make 'em Green :)`,
      demo: () => {
        this.setupBoard([]);
      },
      instructionsEnd: `This is what a completed board looks like.`
    },
    {
      title: 'Changing Colours',
      content: `A tile changes colour when clicked.  Either changing from 'red' to 'green', or from 'green' to 'red'.`,
      demo: () => {
        this.setupBoardWithCheckerPattern([12]);
      },
      instructionsStart: `Click the center tile to change it from red to green.`,
      boardClicked: this.checkForTileClickedHandler(12)
    },
    {
      title: 'Tricky Part',
      content: `But, here's the tricky part. Tiles on adjacent edges of the clicked tile also change colour.`,
      demo: () => {
        this.setupBoardWithCheckerPattern([7, 11, 12, 13, 17]);
      },
      instructionsStart: `Click the 'red' center tile and notice the four surrounding tiles also change colour.`,
      boardClicked: this.checkForTileClickedHandler(12)
    },
    {
      title: 'Changing Four Tiles',
      content: `Clicking a tile on the side of the board (excluding corners) will change the colour of 4 tiles`,
      demo: () => {
        this.setupBoardWithCheckerPattern([9, 13, 14, 19]);
      },
      instructionsStart: `Click the 'red' side tile and notice the three surrounding tiles also change colour.`,
      boardClicked: this.checkForTileClickedHandler(14)
    },
    {
      title: 'Changing Three Tiles',
      content: `Clicking a corner tile on the board will change the colour of 3 tiles`,
      demo: () => {
        this.setupBoardWithCheckerPattern([19, 23, 24]);
      },
      instructionsStart: `Click the 'red' corner tile and notice the two surrounding tiles also change colour.`,
      boardClicked: this.checkForTileClickedHandler(24)
    },
    {
      title: 'Practice I',
      content: `Try solving the board below. ( Hint: It requires one move. )`,
      demo: () => {
        this.setupBoard([7, 11, 12, 13, 17]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice II',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoard([5, 9, 10, 11, 13, 14, 15, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice III',
      content: `Try solving the board below. ( Hint: It requires three moves. )`,
      demo: () => {
        this.setupBoard([0, 1, 5, 7, 11, 12, 13, 17, 19, 23, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice IV',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoard([7, 9, 11, 12, 14, 17, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice V',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoard([7, 8, 11, 14, 17, 18]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VI',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoard([13, 17, 18, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VII',
      content: `Try solving the board below. ( Hint: It requires three moves. )`,
      demo: () => {
        this.setupBoard([5, 7, 9, 10, 12, 14, 15, 17, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VIII',
      content: `Try solving the board below. ( Hint: It requires four moves. )`,
      demo: () => {
        this.setupBoard([3, 4, 5, 10, 11, 13, 14, 15, 23, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice IX',
      content: `Try solving the board below. ( Hint: It requires four moves. )`,
      demo: () => {
        this.setupBoard([1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice X',
      content: `Try solving the board below. ( Hint: It requires five moves. )`,
      demo: () => {
        this.setupBoard([1, 2, 3, 5, 9, 10, 12, 14, 15, 19, 21, 22, 23]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Final',
      content: `That concludes the tutorial.  You're ready to start playing Make 'em Green`,
      demo: () => {
        this.squares = [];
      }
    }
  ];

  private squares = [];
  private isShowSection = false;
  private isShowInstructionsStart = false;
  private isShowInstructionsEnd = false;
  private instructionsBubbleTimeoutId;
  private isLessonCompleted = false;

  constructor(
    private router: Router,
    private soundService: SoundService)
  {
    this.setupLesson();
  }

  ngOnInit() {
  }

  setupLesson() {
    // Clear the completed lesson flag
    this.isLessonCompleted = false;

    // Copy current lesson into lesson
    this.lesson = Object.assign({}, this.lessons[this.currentLesson - 1]);

    // Default to an empty boardClicked callback when undefined
    if (typeof this.lesson.boardClicked === 'undefined') {
      this.lesson.boardClicked = () => {};
    }

    this.showSection();

    // Setup board
    this.lesson.demo();

    // Show instructions
    if (this.lesson.instructionsStart) {
      this.showStartInstructions();
    } else if (this.lesson.instructionsEnd) {
      this.showEndInstructions(3000);
    }
  }

  showSection() {
    this.isShowSection = true;
  }

  hideSection() {
    this.isShowSection = false;
  }

  showStartInstructions() {
    this.hideInstructions();

    // show the start instructions after 3 secs
    this.instructionsBubbleTimeoutId = setTimeout(() => {
      this.isShowInstructionsStart = true;
    }, 3000);
  }

  showEndInstructions(delayInMsecs) {
    this.hideInstructions();

    // show the end instructions after delay
    this.instructionsBubbleTimeoutId = setTimeout(() => {
      this.isShowInstructionsEnd = true;
    }, delayInMsecs);
  }

  hideInstructions() {
    // Clear instructions bubble timeout
    clearTimeout(this.instructionsBubbleTimeoutId);

    // Hide instructions
    this.isShowInstructionsStart = false;
    this.isShowInstructionsEnd = false;
  }

  nextLesson() {
    if (this.currentLesson < this.lessons.length) {

      this.hideSection();
      this.hideInstructions();

      // Show next lesson after 0.3 secs
      setTimeout(() => {
        this.currentLesson += 1;
        this.setupLesson();
      }, 300);
    }
  }

  setupBoardWithCheckerPattern(enabled = undefined) {
    let selected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
    this.setupBoard(selected, enabled);
  }

  setupBoard(selected, enabled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]) {
    this.squares = [];
    for (let i = 0; i < 25; i++) {
      this.squares.push({
        id: i,
        selected: selected.indexOf(i) < 0,
        disabled: enabled.indexOf(i) < 0
      }, );
    }
  }

  checkForGameWonHandler() {
    return () => {
      if (!this.isLessonCompleted && this.isGameWon()) {
        this.isLessonCompleted = true;
        this.lesson.instructionsEnd = "Well done!"
        this.showEndInstructions(300);
      }
    }
  }

  checkForTileClickedHandler(requiredTileIndex) {
    return (event) => {
      if (!this.isLessonCompleted && event.tileIndex === requiredTileIndex) {
        this.isLessonCompleted = true;
        this.lesson.instructionsEnd = "Well done!";
        this.showEndInstructions(300);
      }
    }
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

  playBlipSound() {
    this.soundService.playBlipSound();
  }

  showSelectLevel () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/select-level']);
  }

}
