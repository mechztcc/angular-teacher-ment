import { Component, Input } from '@angular/core';
import { faBolt, faCalendar, faImage, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss'],
})
export class CardQuestionComponent {
  @Input() question: { title: string; type: number; topic: string };
  icons = {
    bolt: faBolt,
    edit: faPen,
    calendar: faCalendar,
    image: faImage
  };
}
