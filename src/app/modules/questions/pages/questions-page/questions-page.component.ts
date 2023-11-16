import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { QuestionsService } from '../../shared/services/questions/questions.service';
import { IQuestion } from '../../shared/types/question';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
})
export class QuestionsPageComponent implements OnInit {
  questions: IQuestion[] = [];
  isLoading: boolean = false;

  icons = {
    book: faBook,
  };

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.findQuestions();
  }

  findQuestions() {
    this.isLoading = true;
    this.questionsService
      .index()
      .subscribe((data) => {
        this.questions = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
