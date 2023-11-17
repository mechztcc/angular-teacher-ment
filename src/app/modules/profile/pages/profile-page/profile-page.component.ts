import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { IProfileDetails } from '../../shared/types/profile-details.interface';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  isLoading: boolean = false;

  icons = {
    user: faUser
  }

  payload: IProfileDetails;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.find();
  }

  find() {
    this.isLoading = true;
    this.profileService
      .findDetails()
      .subscribe((data) => {
        this.payload = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
