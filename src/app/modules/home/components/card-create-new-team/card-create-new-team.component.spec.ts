import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateNewTeamComponent } from './card-create-new-team.component';

describe('CardCreateNewTeamComponent', () => {
  let component: CardCreateNewTeamComponent;
  let fixture: ComponentFixture<CardCreateNewTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreateNewTeamComponent]
    });
    fixture = TestBed.createComponent(CardCreateNewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
