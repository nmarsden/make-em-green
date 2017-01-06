import { Component, OnInit, AnimationTransitionEvent } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { GameStateService } from "../services/game-state.service";
import { SoundService } from "../services/sound.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  host: {
    '[@routerTransition]': '',
    '(@routerTransition.start)': 'routerAnimationStarted($event)',
    '(@routerTransition.done)': 'routerAnimationDone($event)',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition()
  ]
})
export class InfoComponent implements OnInit {

  private gameState;

  constructor(private gameStateService: GameStateService, private soundService: SoundService) {
    this.gameState = this.gameStateService.getGameState();
  }

  ngOnInit() {
  }

  routerAnimationStarted($event: AnimationTransitionEvent) {
    if ($event.toState === 'void') {
      this.soundService.playTransitionSound();
      this.gameState.isRouteLeaveAnimationInProgress = true;
    }
  }

  routerAnimationDone($event: AnimationTransitionEvent) {
    if ($event.toState == 'void') {
      this.gameState.isRouteLeaveAnimationInProgress = false;
    }
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }
}
