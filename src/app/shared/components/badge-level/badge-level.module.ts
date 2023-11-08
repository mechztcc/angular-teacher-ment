import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from '../badge/badge.module';
import { BadgeLevelComponent } from './badge-level.component';

@NgModule({
  declarations: [BadgeLevelComponent],
  imports: [CommonModule, BadgeModule, FontAwesomeModule],
  exports: [BadgeLevelComponent],
})
export class BadgeLevelModule {}
