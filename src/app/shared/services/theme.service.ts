import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  onToggle() {
    const html = document.querySelector('html').classList;
    if (!html.contains('dark')) {
      html.add('dark');
      localStorage.setItem('dark', 'active');
    } else {
      html.remove('dark');
      localStorage.removeItem('dark');
    }
  }

  onVerify() {
    if (localStorage.getItem('dark')) {
      this.onToggle();
    }
  }
}
