import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInformationsComponent } from './cards-informations.component';

describe('CardsInformationsComponent', () => {
  let component: CardsInformationsComponent;
  let fixture: ComponentFixture<CardsInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsInformationsComponent]
    });
    fixture = TestBed.createComponent(CardsInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
