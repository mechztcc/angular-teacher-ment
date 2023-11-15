import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputFloatingTextComponent } from './input-floating-text.component';

@NgModule({
  declarations: [InputFloatingTextComponent],
  imports: [CommonModule, FontAwesomeModule, NgxMaskDirective, NgxMaskPipe],
  exports: [InputFloatingTextComponent],
  providers: [provideNgxMask()],
})
export class InputFloatingTextModule {}
