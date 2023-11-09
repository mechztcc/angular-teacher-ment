import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionLevelComponent } from './create-question-level.component';

describe('CreateQuestionLevelComponent', () => {
  let component: CreateQuestionLevelComponent;
  let fixture: ComponentFixture<CreateQuestionLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionLevelComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
