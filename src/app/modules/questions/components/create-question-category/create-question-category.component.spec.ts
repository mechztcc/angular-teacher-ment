import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionCategoryComponent } from './create-question-category.component';

describe('CreateQuestionCategoryComponent', () => {
  let component: CreateQuestionCategoryComponent;
  let fixture: ComponentFixture<CreateQuestionCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionCategoryComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
