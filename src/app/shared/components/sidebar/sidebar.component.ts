import { Component } from '@angular/core';
import {
  faBookmark,
  faCalendar,
  faDoorOpen,
  faGraduationCap,
  faMoon,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  icons = {
    teams: faGraduationCap,
    questions: faBookmark,
    configuration: faSlidersH,
    exit: faDoorOpen,
    calendar: faCalendar,
    light: faMoon,
  };
}
