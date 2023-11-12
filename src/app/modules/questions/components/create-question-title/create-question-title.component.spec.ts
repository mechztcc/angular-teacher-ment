import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionTitleComponent } from './create-question-title.component';

describe('CreateQuestionTitleComponent', () => {
  let component: CreateQuestionTitleComponent;
  let fixture: ComponentFixture<CreateQuestionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionTitleComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
