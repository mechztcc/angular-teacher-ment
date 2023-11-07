import { Component } from '@angular/core';
import {
  faBook,
  faCalendar,
  faChartSimple,
  faMedal,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss'],
})
export class CardLessonComponent {
  icons = {
    book: faBook,
    users: faUsers,
    calendar: faCalendar,
    level: faChartSimple,
    star: faStar,
    medal: faMedal
  };
}
