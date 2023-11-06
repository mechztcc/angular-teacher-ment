import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { IModalRefOptions } from '../../types/modal-render-options.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalRenderService {
  contentRef: ViewContainerRef;
  templateRef: TemplateRef<any>;
  isAlive: boolean = false;

  options = {
    width: 'lg',
  };

  constructor() {}

  onOpen(template: TemplateRef<any>, options?: IModalRefOptions) {
    this.isAlive = true;
    this.templateRef = template;
  }

  onClose() {
    this.isAlive = false;
  }
}
