import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationSidebarModule } from '../notification-sidebar/notification-sidebar.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FontAwesomeModule, NotificationSidebarModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
