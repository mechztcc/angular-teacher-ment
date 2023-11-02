import { Component } from '@angular/core';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-opened-lessons',
  templateUrl: './opened-lessons.component.html',
  styleUrls: ['./opened-lessons.component.scss'],
  animations: [fade],
})
export class OpenedLessonsComponent {
  items = [1, 2, 3];

  icons = {
    timer: faHourglassStart,
  };
}
