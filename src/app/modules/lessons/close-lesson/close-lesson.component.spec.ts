import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseLessonComponent } from './close-lesson.component';

describe('CloseLessonComponent', () => {
  let component: CloseLessonComponent;
  let fixture: ComponentFixture<CloseLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseLessonComponent]
    });
    fixture = TestBed.createComponent(CloseLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
