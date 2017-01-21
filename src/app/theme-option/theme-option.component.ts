import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-option',
  inputs: ['theme'],
  templateUrl: './theme-option.component.html',
  styleUrls: ['./theme-option.component.less']
})
export class ThemeOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
