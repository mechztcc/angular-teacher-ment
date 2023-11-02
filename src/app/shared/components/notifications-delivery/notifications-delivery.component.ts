import { Component } from '@angular/core';
import { faCheck, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications-delivery',
  templateUrl: './notifications-delivery.component.html',
  styleUrls: ['./notifications-delivery.component.scss'],
})
export class NotificationsDeliveryComponent {
  icons = {
    ok: faCheckCircle,
    close: faTrash
  };
}
