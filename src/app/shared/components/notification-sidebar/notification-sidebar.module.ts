import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSidebarComponent } from './notification-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NotificationSidebarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NotificationSidebarComponent],
})
export class NotificationSidebarModule {}
