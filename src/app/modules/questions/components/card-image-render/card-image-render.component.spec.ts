import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageRenderComponent } from './card-image-render.component';

describe('CardImageRenderComponent', () => {
  let component: CardImageRenderComponent;
  let fixture: ComponentFixture<CardImageRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardImageRenderComponent]
    });
    fixture = TestBed.createComponent(CardImageRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
