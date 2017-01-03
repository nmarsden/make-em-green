import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {GameStateService} from "./services/game-state.service";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.variables.less',
    './app.component.less'
  ]
})

export class AppComponent implements OnInit {

  constructor(private gameStateService: GameStateService) {}

  ngOnInit() {
    window.onbeforeunload = () => {
      this.gameStateService.saveState();
    };

    this.gameStateService.restoreState();
  }

}
