import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [PrimaryButtonComponent],
})
export class PrimaryButtonModule {}
