import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamsListComponent } from './card-teams-list.component';

describe('CardTeamsListComponent', () => {
  let component: CardTeamsListComponent;
  let fixture: ComponentFixture<CardTeamsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTeamsListComponent]
    });
    fixture = TestBed.createComponent(CardTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
