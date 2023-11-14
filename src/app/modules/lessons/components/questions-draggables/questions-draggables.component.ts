import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/modules/questions/shared/services/questions/questions.service';
import { IQuestion } from 'src/app/modules/questions/shared/types/question';

@Component({
  selector: 'app-questions-draggables',
  templateUrl: './questions-draggables.component.html',
  styleUrls: ['./questions-draggables.component.scss'],
})
export class QuestionsDraggablesComponent implements OnInit {
  questions: IQuestion[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.findQuestions();
  }

  onDragStart(event: DragEvent) {
    const question = JSON.stringify({ id: 1, name: 'Question' });
    event.dataTransfer.setData('text/plain', question);
  }

  findQuestions() {
    this.questionsService.index().subscribe((data) => {
      this.questions = data;
    });
  }
}
