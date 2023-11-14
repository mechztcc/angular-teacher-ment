import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDropZoneComponent } from './questions-drop-zone.component';

describe('QuestionsDropZoneComponent', () => {
  let component: QuestionsDropZoneComponent;
  let fixture: ComponentFixture<QuestionsDropZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsDropZoneComponent]
    });
    fixture = TestBed.createComponent(QuestionsDropZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
