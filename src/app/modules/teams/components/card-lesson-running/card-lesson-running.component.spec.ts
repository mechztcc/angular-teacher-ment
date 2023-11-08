import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLessonRunningComponent } from './card-lesson-running.component';

describe('CardLessonRunningComponent', () => {
  let component: CardLessonRunningComponent;
  let fixture: ComponentFixture<CardLessonRunningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLessonRunningComponent]
    });
    fixture = TestBed.createComponent(CardLessonRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
