import { Component } from '@angular/core';
import { faBook, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss']
})
export class CardLessonComponent {

  icons = {
    timer: faClock,
    book: faBook,
    team: faUsers
  }
}
