import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedLessonsComponent } from './opened-lessons.component';

describe('OpenedLessonsComponent', () => {
  let component: OpenedLessonsComponent;
  let fixture: ComponentFixture<OpenedLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenedLessonsComponent]
    });
    fixture = TestBed.createComponent(OpenedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
