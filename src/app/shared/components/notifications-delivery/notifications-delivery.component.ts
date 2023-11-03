import { Component } from '@angular/core';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../../animations/fade.animation';
import { NotificationsDeliveryService } from '../../services/notifications-delivery.service';

@Component({
  selector: 'app-notifications-delivery',
  templateUrl: './notifications-delivery.component.html',
  styleUrls: ['./notifications-delivery.component.scss'],
  animations: [fade],
})
export class NotificationsDeliveryComponent {
  constructor(public store: NotificationsDeliveryService) {}

  icons = {
    ok: faCheckCircle,
    close: faTrash,
    error: faExclamationTriangle,
  };
}
