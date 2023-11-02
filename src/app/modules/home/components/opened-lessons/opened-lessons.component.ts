import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-opened-lessons',
  templateUrl: './opened-lessons.component.html',
  styleUrls: ['./opened-lessons.component.scss'],
})
export class OpenedLessonsComponent {
  icons = {
    timer: faClock,
  };
}
