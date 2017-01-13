import { Component, OnInit, AnimationTransitionEvent } from '@angular/core';
import { routerTransition } from '../app.routes.animations';
import { SoundService } from "../services/sound.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  host: {
    '[@routerTransition]': '',
    '[style.display]': "'block'"
  },
  animations: [
    routerTransition()
  ]
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private soundService: SoundService) {
  }

  ngOnInit() {
  }

  showHome () {
    this.soundService.playTransitionSound();
    this.router.navigate(['/home']);
  }

  playHoverSound() {
    this.soundService.playHoverSound();
  }
}
