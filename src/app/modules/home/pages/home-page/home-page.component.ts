import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/users/shared/services/users/users.service';
import { fade } from 'src/app/shared/animations/fade.animation';
import { IFindInformationsResponse } from '../../shared/types/find-informations-response.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fade],
})
export class HomePageComponent implements OnInit {
  informations: IFindInformationsResponse = {
    teamsCount: 0,
    studentsCount: 0,
  };

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.findInformations();
  }

  findInformations() {
    this.usersService.dashboardInformations().subscribe((data) => {
      this.informations = data;
    });
  }
}
