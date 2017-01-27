import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { SoundService } from "../services/sound.service";
import { GameStateService } from "../services/game-state.service";
import { LevelService } from "../services/level.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.less'],
  host: {
    '[@routerTransition]': '',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition()
  ]
})
export class SelectLevelComponent implements OnInit {

  private gameState;
  private levelRows = [];

  constructor(
    private router: Router,
    private gameStateService: GameStateService,
    private levelService: LevelService,
    private soundService: SoundService) {

    this.gameState = this.gameStateService.getGameState();
    this.initLevelRows();
  }

  ngOnInit() {
  }

  initLevelRows() {
    for (let row=0; row<10; row++) {
      this.levelRows[row] = [];
      for (let col=0; col<10; col++) {
        let level = 1 + (row * 10) + col;
        let bestSolution = this.levelService.getPlayersBestSolution(level);

        this.levelRows[row].push({
          numStars: this.levelService.getStarsEarned(level, bestSolution),
          isSolved: this.levelService.isLevelSolved(level),
          isLocked: this.levelService.isLevelLocked(level),
        });
      }
    }
  }

  levelRowTrackByFn(index) {
    return index;
  }

  levelTrackByFn(index, level) {
    return index;
  }

  clickLevel (row, col) {
    let level = 1 + (row * 10) + col;
    this.showLevel(level)
  }

  showLevel (level) {
    this.gameState.selectedLevel = level;

    this.soundService.playTransitionSound();
    this.router.navigate(['/level']);
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
