import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLessonsPageComponent } from './list-lessons-page.component';

describe('ListLessonsPageComponent', () => {
  let component: ListLessonsPageComponent;
  let fixture: ComponentFixture<ListLessonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLessonsPageComponent]
    });
    fixture = TestBed.createComponent(ListLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
