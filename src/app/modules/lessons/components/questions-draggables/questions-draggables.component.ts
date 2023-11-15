import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/modules/questions/shared/services/questions/questions.service';
import { IQuestion } from 'src/app/modules/questions/shared/types/question';

@Component({
  selector: 'app-questions-draggables',
  templateUrl: './questions-draggables.component.html',
  styleUrls: ['./questions-draggables.component.scss'],
})
export class QuestionsDraggablesComponent implements OnInit {
  @Input() questions: IQuestion[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {}

  onDragStart(event: DragEvent) {
    const question = JSON.stringify({ id: 1, name: 'Question' });
    event.dataTransfer.setData('text/plain', question);
  }
}
