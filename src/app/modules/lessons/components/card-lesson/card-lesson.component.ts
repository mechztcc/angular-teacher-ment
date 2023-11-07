import { Component, Input } from '@angular/core';
import {
  faBook,
  faBookmark,
  faCalendar,
  faChartSimple,
  faLock,
  faLockOpen,
  faMedal,
  faPen,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { ILessonInterface } from '../../shared/types/lesson.interface';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss'],
})
export class CardLessonComponent {
  @Input() lesson: ILessonInterface;

  icons = {
    book: faBook,
    users: faUsers,
    calendar: faCalendar,
    level: faChartSimple,
    star: faStar,
    medal: faMedal,
    question: faBookmark,
    pen: faPen,
    lock: faLock,
    open: faLockOpen
  };
}
