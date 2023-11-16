import { Component, Input } from '@angular/core';
import { faBook, faClock, faScroll, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ILessonInterface } from 'src/app/modules/lessons/shared/types/lesson.interface';
import { growRight } from 'src/app/shared/animations/grow-right.animation';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss'],
  animations: [growRight],
})
export class CardLessonComponent {
  @Input() lesson: ILessonInterface;

  icons = {
    timer: faClock,
    book: faBook,
    team: faUsers,
    lesson: faScroll,
    users: faUser
  };
}
