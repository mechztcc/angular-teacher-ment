import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeLevelComponent } from './badge-level.component';

describe('BadgeLevelComponent', () => {
  let component: BadgeLevelComponent;
  let fixture: ComponentFixture<BadgeLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeLevelComponent]
    });
    fixture = TestBed.createComponent(BadgeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
