import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  constructor() { }

  getThemeClassObject(theme) {
    let obj = {};
    obj[`theme-${theme}`] = true;
    return obj;
  }

}
