import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../services/theme.service";

@Component({
  selector: 'app-theme-option',
  inputs: ['theme'],
  templateUrl: './theme-option.component.html',
  styleUrls: ['./theme-option.component.less']
})
export class ThemeOptionComponent implements OnInit {

  private theme;
  private themeClassObject;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeClassObject = this.themeService.getThemeClassObject(this.theme);
  }

}
