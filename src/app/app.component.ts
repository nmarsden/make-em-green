import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameStateService } from "./services/game-state.service";
import { SoundService } from "./services/sound.service";
import { Router, NavigationEnd } from "@angular/router";
import { SettingsService } from "./services/settings.service";

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

  private isSoundOn;
  private theme;

  constructor(
    private gameStateService: GameStateService,
    private settingsService: SettingsService,
    private soundService: SoundService,
    private router: Router
  ) {

  }

  ngOnInit() {
    // init game state
    this.gameStateService.restoreState();

    this.isSoundOn = this.settingsService.getIsSoundOn();
    this.theme = this.settingsService.getTheme();

    // subscribe to theme updated event
    this.settingsService.subscribeToThemeUpdatedEvent((theme) => { this.theme = theme; });

    // init sounds
    this.soundService.initSounds(this.isSoundOn);

    // subscribe to router events to save state whenever the route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.gameStateService.saveState();
      }
    });
  }

  showHome () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/']);
  }

  toggleSound() {
    this.soundService.playHighlightSound();
    this.isSoundOn = !this.isSoundOn;
    this.settingsService.updateIsSoundOn(this.isSoundOn);

    this.soundService.setMute(!this.isSoundOn);
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
