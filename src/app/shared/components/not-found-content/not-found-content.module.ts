import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundContentComponent } from './not-found-content.component';
import { SimpleButtonModule } from '../simple-button/simple-button.module';

@NgModule({
  declarations: [NotFoundContentComponent],
  exports: [NotFoundContentComponent],
  imports: [CommonModule, FontAwesomeModule, SimpleButtonModule],
})
export class NotFoundContentModule {}
