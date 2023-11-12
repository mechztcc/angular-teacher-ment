import { Component, Input } from '@angular/core';
import {
  faBolt,
  faCalendar,
  faImage,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { ICreateQuestion } from '../../shared/types/create-question.interface';
import { IQuestion } from '../../shared/types/question';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss'],
})
export class CardQuestionComponent {
  @Input() question: IQuestion;
  icons = {
    bolt: faBolt,
    edit: faPen,
    calendar: faCalendar,
    image: faImage,
  };
}
