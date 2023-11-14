import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDraggablesComponent } from './questions-draggables.component';

describe('QuestionsDraggablesComponent', () => {
  let component: QuestionsDraggablesComponent;
  let fixture: ComponentFixture<QuestionsDraggablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsDraggablesComponent]
    });
    fixture = TestBed.createComponent(QuestionsDraggablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
