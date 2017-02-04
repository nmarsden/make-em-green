import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { SoundService } from "../services/sound.service";
import { Router } from "@angular/router";
import { LevelService } from "../services/level.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  host: {
    '[@routerTransition]': '',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition()
  ]
})
export class HomeComponent implements OnInit {

  private isFirstLevelSolved;

  constructor(
    private router: Router,
    private soundService: SoundService,
    private levelService: LevelService) {
  }

  ngOnInit() {
    this.isFirstLevelSolved = this.levelService.isLevelSolved(1);
  }

  showSelectLevel () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/select-level']);
  }

  showLevel () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/level']);
  }

  showSettings () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/settings']);
  }

  showTutorial () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/tutorial']);
  }

  showInfo () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/info']);
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
