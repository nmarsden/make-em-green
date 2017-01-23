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
      content: `These lessons will teach you how to play Make 'em Green. Click 'Next' to continue.`,
      demo: () => {
        this.squares = [];
      }
    },
    {
      title: 'Levels',
      content: 'Each level consists of various red and green tiles on a 5 x 5 board.  An example is shown below.',
      demo: () => {
        this.setupBoardWithCheckerPattern();
      }
    },
    {
      title: 'Goal',
      content: `Completing a level requires the board to have all 'green' tiles.  Hence the name Make 'em Green :)`,
      demo: () => {
        this.setupBoardWithGreenTilesOnly();
      }
    },
    {
      title: 'Changing Colours',
      content: `A tile changes colour when clicked.  Either changing from 'red' to 'green', or from 'green' to 'red'.`,
      demo: () => {
        this.setupBoardWithCheckerPattern([12]);
      },
      instructions: `Try clicking the center tile a few times to change its colour.  Then click 'Next' to proceed.`
    },
    {
      title: 'Tricky Part',
      content: `But, here's the tricky part. Tiles on adjacent edges of the clicked tile also change colour.`,
      demo: () => {
        this.setupBoardWithCheckerPattern([7, 11, 12, 13, 17]);
      },
      instructions: `Click the 'red' center tile and notice the four surrounding tiles also change colour.`
    },
    {
      title: 'Changing Four Tiles',
      content: `Clicking a tile on the side of the board (excluding corners) will change the colour of 4 tiles`,
      demo: () => {
        this.setupBoardWithCheckerPattern([9, 13, 14, 19]);
      },
      instructions: `Click the 'red' side tile and notice the three surrounding tiles also change colour.`
    },
    {
      title: 'Changing Three Tiles',
      content: `Clicking a corner tile on the board will change the colour of 3 tiles`,
      demo: () => {
        this.setupBoardWithCheckerPattern([19, 23, 24]);
      },
      instructions: `Click the 'red' corner tile and notice the two surrounding tiles also change colour.`
    },
    {
      title: 'Practice I',
      content: `Try solving the board below. ( Hint: It requires one move. )`,
      demo: () => {
        this.setupBoardForPractice([7, 11, 12, 13, 17]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice II',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoardForPractice([5, 9, 10, 11, 13, 14, 15, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice III',
      content: `Try solving the board below. ( Hint: It requires three moves. )`,
      demo: () => {
        this.setupBoardForPractice([0, 1, 5, 7, 11, 12, 13, 17, 19, 23, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice IV',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoardForPractice([7, 9, 11, 12, 14, 17, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice V',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoardForPractice([7, 8, 11, 14, 17, 18]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VI',
      content: `Try solving the board below. ( Hint: It requires two moves. )`,
      demo: () => {
        this.setupBoardForPractice([13, 17, 18, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VII',
      content: `Try solving the board below. ( Hint: It requires three moves. )`,
      demo: () => {
        this.setupBoardForPractice([5, 7, 9, 10, 12, 14, 15, 17, 19]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice VIII',
      content: `Try solving the board below. ( Hint: It requires four moves. )`,
      demo: () => {
        this.setupBoardForPractice([3, 4, 5, 10, 11, 13, 14, 15, 23, 24]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice IX',
      content: `Try solving the board below. ( Hint: It requires four moves. )`,
      demo: () => {
        this.setupBoardForPractice([1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23]);
      },
      boardClicked: this.checkForGameWonHandler()
    },
    {
      title: 'Practice X',
      content: `Try solving the board below. ( Hint: It requires five moves. )`,
      demo: () => {
        this.setupBoardForPractice([1, 2, 3, 5, 9, 10, 12, 14, 15, 19, 21, 22, 23]);
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
  private isShowInstructionBubble = false;

  constructor(
    private router: Router,
    private soundService: SoundService)
  {
    this.setupLesson();
  }

  ngOnInit() {
  }

  setupLesson() {
    // Copy current lesson into lesson
    this.lesson = Object.assign({}, this.lessons[this.currentLesson - 1]);
    // this.lesson = this.lessons[this.currentLesson - 1];

    // Default to an empty boardClicked callback when undefined
    if (typeof this.lesson.boardClicked === 'undefined') {
      this.lesson.boardClicked = () => {};
    }

    // setup board
    this.lesson.demo();

    // show the instructions bubble after 3 secs
    this.isShowInstructionBubble = false;
    setTimeout(() => {
      this.isShowInstructionBubble = true;
    }, 3000);
  }

  nextLesson() {
    if (this.currentLesson < this.lessons.length) {
      this.currentLesson += 1;
      this.setupLesson();
    }
  }

  previousLesson() {
    if (this.currentLesson > 1) {
      this.currentLesson -= 1;
      this.setupLesson();
    }
  }

  setupBoardWithCheckerPattern(enabled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]) {
    this.squares = [];
    let selected = false;
    for (let i = 0; i < 25; i++) {
      this.squares.push({id: i, selected: selected, disabled: enabled.indexOf(i) < 0});
      selected = !selected;
    }
  }

  setupBoardWithGreenTilesOnly() {
    this.squares = [];
    for (let i = 0; i < 25; i++) {
      this.squares.push({id: i, selected: true});
    }
  }

  setupBoardForPractice(selected) {
    this.squares = [];
    for (let i = 0; i < 25; i++) {
      this.squares.push({id: i, selected: selected.indexOf(i) < 0});
    }
  }

  checkForGameWonHandler() {
    return () => {
      if (this.isGameWon()) {
        this.lesson.instructions = "Well done.  Click 'Next' to proceed"
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
