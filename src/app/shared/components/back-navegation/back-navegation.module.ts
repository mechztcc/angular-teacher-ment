import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackNavegationComponent } from './back-navegation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from '../badge/badge.module';

@NgModule({
  declarations: [BackNavegationComponent],
  imports: [CommonModule, FontAwesomeModule, BadgeModule],
  exports: [BackNavegationComponent],
})
export class BackNavegationModule {}
