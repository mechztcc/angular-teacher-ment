import { Component, Input } from '@angular/core';
import {
  faBuildingWheat,
  faDiamond,
  faEnvelope,
  faGamepad,
  faGraduationCap,
  faLocationDot,
  faScroll,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { IProfileDetails } from '../../shared/types/profile-details.interface';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent {
  @Input() details: IProfileDetails;

  icons = {
    location: faLocationDot,
    teacher: faGraduationCap,
    lessons: faScroll,
    users: faUsers,
    diamond: faDiamond,
    game: faGamepad,
    build: faBuildingWheat,
    email: faEnvelope,
  };
}
