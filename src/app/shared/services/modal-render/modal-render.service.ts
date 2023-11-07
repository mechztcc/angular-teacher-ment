import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalRenderService {
  contentRef: ViewContainerRef;
  templateRef: TemplateRef<any>;
  isAlive: boolean = false;

  title: string;

  constructor() {}

  onOpen(template: TemplateRef<any>, title: string) {
    this.isAlive = true;
    this.templateRef = template;
    this.title = title;
  }

  onClose() {
    this.isAlive = false;
  }
}
