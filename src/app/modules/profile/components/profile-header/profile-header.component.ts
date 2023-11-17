import { Component } from '@angular/core';
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

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent {
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
