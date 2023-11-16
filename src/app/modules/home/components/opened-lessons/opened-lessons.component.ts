import { Component, Input } from '@angular/core';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { fade } from 'src/app/shared/animations/fade.animation';
import { IFindInformationsResponse } from '../../shared/types/find-informations-response.interface';

@Component({
  selector: 'app-opened-lessons',
  templateUrl: './opened-lessons.component.html',
  styleUrls: ['./opened-lessons.component.scss'],
  animations: [fade],
})
export class OpenedLessonsComponent {
  @Input() information: IFindInformationsResponse;

  icons = {
    timer: faHourglassStart,
  };
}
