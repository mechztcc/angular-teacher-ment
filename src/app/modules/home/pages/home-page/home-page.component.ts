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
    lessonsCount: 0,
    studentsCount: 0,
    teamsCount: 0,
  };
  isLoading: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.findInformations();
  }

  findInformations() {
    this.isLoading = true;
    this.usersService
      .dashboardInformations()
      .subscribe((data) => {
        this.informations = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
