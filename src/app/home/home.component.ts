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

  showLevel () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/level']);
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }
}
