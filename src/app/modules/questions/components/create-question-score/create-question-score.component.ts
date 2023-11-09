import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-question-score',
  templateUrl: './create-question-score.component.html',
  styleUrls: ['./create-question-score.component.scss'],
})
export class CreateQuestionScoreComponent {
  icons = {
    book: faBook,
  };

  scores = [
    { name: '1', id: 1 },
    { name: '2', id: 2 },
    { name: '3', id: 3 },
  ];
}
