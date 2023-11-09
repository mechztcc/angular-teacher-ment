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

  onCloseFromView(event: any) {
    const isFrame = Array(event.target.classList);
    if (isFrame[0]['value'].includes('frame')) {
      this.isAlive = false;
    }
  }
}
