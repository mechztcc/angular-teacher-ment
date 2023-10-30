import { Component } from '@angular/core';
import { faQuoteLeft, faQuoteRight, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss'],
})
export class NotificationSidebarComponent {
  icons = {
    user: faUser,
    cote: faQuoteRight
  };
}
