import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFloatingTextComponent } from './input-floating-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [InputFloatingTextComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [InputFloatingTextComponent],
})
export class InputFloatingTextModule {}
