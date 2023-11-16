import { Component } from '@angular/core';
import { faChevronLeft, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-navegation',
  templateUrl: './back-navegation.component.html',
  styleUrls: ['./back-navegation.component.scss'],
})
export class BackNavegationComponent {
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
