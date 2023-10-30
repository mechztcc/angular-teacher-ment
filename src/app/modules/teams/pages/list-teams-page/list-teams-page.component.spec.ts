import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamsPageComponent } from './list-teams-page.component';

describe('ListTeamsPageComponent', () => {
  let component: ListTeamsPageComponent;
  let fixture: ComponentFixture<ListTeamsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTeamsPageComponent]
    });
    fixture = TestBed.createComponent(ListTeamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
