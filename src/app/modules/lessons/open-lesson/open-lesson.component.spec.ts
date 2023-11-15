import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLessonComponent } from './open-lesson.component';

describe('OpenLessonComponent', () => {
  let component: OpenLessonComponent;
  let fixture: ComponentFixture<OpenLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenLessonComponent]
    });
    fixture = TestBed.createComponent(OpenLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
