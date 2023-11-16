import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavegationComponent } from './back-navegation.component';

describe('BackNavegationComponent', () => {
  let component: BackNavegationComponent;
  let fixture: ComponentFixture<BackNavegationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackNavegationComponent]
    });
    fixture = TestBed.createComponent(BackNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
