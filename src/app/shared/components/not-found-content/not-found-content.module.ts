import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundContentComponent } from './not-found-content.component';

@NgModule({
  declarations: [NotFoundContentComponent],
  exports: [NotFoundContentComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class NotFoundContentModule {}
