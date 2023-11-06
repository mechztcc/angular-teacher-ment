import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  toggle() {
    document.documentElement.classList.add('dark');
  }
}
