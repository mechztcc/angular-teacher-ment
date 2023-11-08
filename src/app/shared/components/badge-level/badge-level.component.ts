import { Component, Input } from '@angular/core';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge-level',
  templateUrl: './badge-level.component.html',
  styleUrls: ['./badge-level.component.scss'],
})
export class BadgeLevelComponent {
  @Input() level: number;
  @Input() label: string;

  icons = {
    level: faChartSimple,
  };
}
