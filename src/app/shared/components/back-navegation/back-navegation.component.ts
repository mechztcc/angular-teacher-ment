import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faChevronLeft,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-navegation',
  templateUrl: './back-navegation.component.html',
  styleUrls: ['./back-navegation.component.scss'],
})
export class BackNavegationComponent {
  @Input() label: string;
  @Input() icon: IconDefinition;

  icons = {
    back: faChevronLeft,
    users: faUsers,
  };

  get show() {
    return !window.location.href.includes('users');
  }


  onBack() {
    window.history.back();
  }
}
