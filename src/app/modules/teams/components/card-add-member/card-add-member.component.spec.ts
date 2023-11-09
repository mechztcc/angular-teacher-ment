import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddMemberComponent } from './card-add-member.component';

describe('CardAddMemberComponent', () => {
  let component: CardAddMemberComponent;
  let fixture: ComponentFixture<CardAddMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAddMemberComponent]
    });
    fixture = TestBed.createComponent(CardAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
