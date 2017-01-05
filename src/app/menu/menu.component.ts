import { Component, OnInit, AnimationTransitionEvent } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { GameStateService } from "../services/game-state.service";

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

  constructor(private gameStateService: GameStateService) {
    this.gameState = gameStateService.getGameState();
  }

  ngOnInit() {
  }

  routerAnimationStarted($event: AnimationTransitionEvent) {
    if ($event.toState === 'void') {
      this.gameState.isRouteLeaveAnimationInProgress = true;
    }
  }

  routerAnimationDone($event: AnimationTransitionEvent) {
    if ($event.toState == 'void') {
      this.gameState.isRouteLeaveAnimationInProgress = false;
    }
  }
}
