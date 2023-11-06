import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRenderComponent } from './modal-render.component';

describe('ModalRenderComponent', () => {
  let component: ModalRenderComponent;
  let fixture: ComponentFixture<ModalRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRenderComponent]
    });
    fixture = TestBed.createComponent(ModalRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
