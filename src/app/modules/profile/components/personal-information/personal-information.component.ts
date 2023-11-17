import { Component } from '@angular/core';
import {
  faBuildingWheat,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent {
  icons = {
    user: faUser,
    email: faEnvelope,
    phone: faPhone,
    build: faBuildingWheat,
    location: faLocationDot
  };
}
