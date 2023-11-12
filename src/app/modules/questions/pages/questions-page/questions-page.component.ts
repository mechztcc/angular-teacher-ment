import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../shared/services/questions/questions.service';
import { ICreateQuestion } from '../../shared/types/create-question.interface';
import { IQuestion } from '../../shared/types/question';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
})
export class QuestionsPageComponent implements OnInit {
  questions: IQuestion[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.findQuestions();
  }

  findQuestions() {
    this.questionsService.index().subscribe((data) => {
      this.questions = data;
    });
  }
}
