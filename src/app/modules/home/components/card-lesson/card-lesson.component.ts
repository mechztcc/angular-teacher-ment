import { Component, Input } from '@angular/core';
import { faBook, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { growRight } from 'src/app/shared/animations/grow-right.animation';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss'],
  animations: [growRight]
})
export class CardLessonComponent {
  @Input() index: number;
  @Input() total: number;
  icons = {
    timer: faClock,
    book: faBook,
    team: faUsers,
  };
}
