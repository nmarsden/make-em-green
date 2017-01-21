import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { SoundService } from "../services/sound.service";
import { Router } from "@angular/router";

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

  constructor(
    private router: Router,
    private soundService: SoundService) {
  }

  ngOnInit() {
  }

  showSelectLevel () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/select-level']);
  }

  showSettings () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/settings']);
  }

  showInfo () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/info']);
  }

  playBlipSound() {
    this.soundService.playBlipSound();
  }
}
