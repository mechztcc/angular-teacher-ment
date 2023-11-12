import { Component } from '@angular/core';
import { faBolt, faBook } from '@fortawesome/free-solid-svg-icons';
import { CreateQuestionService } from '../../shared/services/create-question/create-question.service';

@Component({
  selector: 'app-create-question-score',
  templateUrl: './create-question-score.component.html',
  styleUrls: ['./create-question-score.component.scss'],
})
export class CreateQuestionScoreComponent {
  icons = {
    book: faBook,
    score: faBolt,
  };

  constructor(private store: CreateQuestionService) {}

  score: number;

  scores = [
    { name: '1', id: 1 },
    { name: '2', id: 2 },
    { name: '3', id: 3 },
  ];

  onSelect(value: number) {
    this.score = value;
    this.store.payload.pontuation = value;
  }
}
