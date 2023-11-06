import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalRenderService } from '../../services/modal-render/modal-render.service';

@Component({
  selector: 'app-modal-render',
  templateUrl: './modal-render.component.html',
  styleUrls: ['./modal-render.component.scss'],
})
export class ModalRenderComponent implements OnInit, AfterViewInit {

  icons = {
    close: faClose,
  };

  constructor(public modalRender: ModalRenderService, public contentRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this.modalRender.contentRef = this.contentRef;
  }

  ngOnInit(): void {
  }
}
