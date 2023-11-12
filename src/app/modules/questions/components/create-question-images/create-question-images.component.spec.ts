import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionImagesComponent } from './create-question-images.component';

describe('CreateQuestionImagesComponent', () => {
  let component: CreateQuestionImagesComponent;
  let fixture: ComponentFixture<CreateQuestionImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionImagesComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
