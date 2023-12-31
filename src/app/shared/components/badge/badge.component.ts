import { Component, Input } from '@angular/core';
import { IconDefinition, faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() label: string | number;
  @Input() type: string = 'default';
  @Input() icon: IconDefinition;
  @Input() selected: boolean = true;

  icons = {
    bolt: faBolt,
  };
}
