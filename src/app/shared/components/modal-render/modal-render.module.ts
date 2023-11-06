import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRenderComponent } from './modal-render.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ModalRenderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ModalRenderComponent],
})
export class ModalRenderModule {}
