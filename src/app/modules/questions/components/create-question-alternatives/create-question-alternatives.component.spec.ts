import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionAlternativesComponent } from './create-question-alternatives.component';

describe('CreateQuestionAlternativesComponent', () => {
  let component: CreateQuestionAlternativesComponent;
  let fixture: ComponentFixture<CreateQuestionAlternativesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionAlternativesComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionAlternativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
