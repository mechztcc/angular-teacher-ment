import { TestBed } from '@angular/core/testing';

import { ModalRenderService } from './modal-render.service';

describe('ModalRenderService', () => {
  let service: ModalRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
