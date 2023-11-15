import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingPageComponent } from './loading-page.component';

@NgModule({
  declarations: [LoadingPageComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoadingPageComponent],
})
export class LoadingPageModule {}
