import { Component, OnInit, AnimationTransitionEvent } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { GameStateService } from "../services/game-state.service";
import { SoundService } from "../services/sound.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
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
export class MenuComponent implements OnInit {

  private gameState;

  constructor(private gameStateService: GameStateService, private soundService: SoundService) {
    this.gameState = gameStateService.getGameState();
  }

  ngOnInit() {
  }

  routerAnimationStarted($event: AnimationTransitionEvent) {
    console.log(`menu: [routerAnimationStarted] $event.toState=${$event.toState}`);

    if ($event.toState === 'void') {
      this.soundService.playTransitionSound();
      this.gameState.isRouteLeaveAnimationInProgress = true;
    }
  }

  routerAnimationDone($event: AnimationTransitionEvent) {
    console.log(`menu: [routerAnimationDone] $event.toState=${$event.toState}`);

    if ($event.toState == 'void') {
      this.gameState.isRouteLeaveAnimationInProgress = false;
    }
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }
}
