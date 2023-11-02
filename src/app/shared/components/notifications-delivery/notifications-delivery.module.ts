import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationsDeliveryComponent } from './notifications-delivery.component';

@NgModule({
  declarations: [NotificationsDeliveryComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NotificationsDeliveryComponent],
})
export class NotificationsDeliveryModule {}
