import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../shared/services/teams.service';

@Component({
  selector: 'app-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss'],
})
export class TeamDetailsPageComponent implements OnInit {
  details: any;

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
