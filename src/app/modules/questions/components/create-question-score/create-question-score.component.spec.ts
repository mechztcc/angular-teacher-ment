import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionScoreComponent } from './create-question-score.component';

describe('CreateQuestionScoreComponent', () => {
  let component: CreateQuestionScoreComponent;
  let fixture: ComponentFixture<CreateQuestionScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionScoreComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
