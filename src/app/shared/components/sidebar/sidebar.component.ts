import { Component } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faBookmark,
  faCalendar,
  faDoorOpen,
  faGraduationCap,
  faHouse,
  faMoon,
  faQuoteRight,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
import { fade } from '../../animations/fade.animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fade],
})
export class SidebarComponent {
  icons = {
    teams: faGraduationCap,
    questions: faBookmark,
    configuration: faSlidersH,
    exit: faDoorOpen,
    calendar: faCalendar,
    light: faMoon,
    cote: faQuoteRight,
    left: faArrowLeft,
    dark: faMoon,
    right: faArrowRight,
    house: faHouse
  };

  isHidden: boolean = false;

  constructor() {}

  get show() {
    const url = window.location.href.split('/');
    return !url.includes('users');
  }
}
