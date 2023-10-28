import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFloatingTextComponent } from './input-floating-text.component';

describe('InputFloatingTextComponent', () => {
  let component: InputFloatingTextComponent;
  let fixture: ComponentFixture<InputFloatingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFloatingTextComponent]
    });
    fixture = TestBed.createComponent(InputFloatingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
