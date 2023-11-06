import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  standalone: true,
  selector: 'app-light-dark-mode',
  templateUrl: './light-dark-mode.component.html',
  styleUrls: ['./light-dark-mode.component.scss'],
})
export class LightDarkModeComponent {
  constructor(public theme: ThemeService) {}
}
