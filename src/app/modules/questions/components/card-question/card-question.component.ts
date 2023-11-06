import { Component, Input } from '@angular/core';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss'],
})
export class CardQuestionComponent {
  @Input() type: number;
  icons = {
    bolt: faBolt,
  };
}
