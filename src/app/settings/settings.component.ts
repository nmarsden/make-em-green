import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../app.routes.animations";
import { SoundService } from "../services/sound.service";
import { SettingsService } from "../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
  host: {
    '[@routerTransition]': '',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition()
  ]
})
export class SettingsComponent implements OnInit {

  private model;

  constructor(
    private settingsService: SettingsService,
    private soundService: SoundService
  ) {

    this.model = {
      themes: [ 'classic', 'cat', 'fruit', 'reptile', 'amphibian', 'mineral', 'plant'],
      selectedTheme: this.settingsService.getTheme()
    };
  }

  ngOnInit() {
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }

  clickTheme(theme) {
    this.soundService.playHighlightSound();

    this.model.selectedTheme = theme;

    this.settingsService.updateTheme(this.model.selectedTheme);
  }
}
