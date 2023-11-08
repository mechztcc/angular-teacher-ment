import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../shared/services/teams.service';
import { ITeam } from '../../shared/types/team.interface';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-teams-page',
  templateUrl: './list-teams-page.component.html',
  styleUrls: ['./list-teams-page.component.scss'],
})
export class ListTeamsPageComponent implements OnInit {
  teams: ITeam[] = [];
  isLoading: boolean = false;

  icons = {
    search: faMagnifyingGlass
  }

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.isLoading = true;
    this.teamsService
      .index()
      .subscribe((data) => {
        this.teams = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
