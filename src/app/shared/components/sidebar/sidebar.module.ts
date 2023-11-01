import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationSidebarModule } from '../notification-sidebar/notification-sidebar.module';
import { NewFeaturesComponent } from '../new-features/new-features.component';
import { LightDarkModeComponent } from '../light-dark-mode/light-dark-mode.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NotificationSidebarModule,
    NewFeaturesComponent,
    LightDarkModeComponent,
    RouterModule
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
