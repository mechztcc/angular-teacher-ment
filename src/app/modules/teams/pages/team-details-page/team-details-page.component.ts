import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../shared/services/teams.service';
import { ITeamDetails } from '../../shared/types/team-details.interface';
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss'],
})
export class TeamDetailsPageComponent implements OnInit {
  details: ITeamDetails;

  icons = {
    users: faUsers,
    book: faBook
  }

  constructor(
    private teamsService: TeamsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findDetails();
  }

  findDetails() {
    const { id } = this.routes.params['_value'];
    this.teamsService
      .findDetails(id)
      .subscribe((data) => {
        this.details = data;
      })
      .add(() => {});
  }
}
