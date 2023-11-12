import { Injectable } from '@angular/core';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { ICreateQuestion } from '../../types/create-question.interface';
import { QuestionsService } from '../questions/questions.service';

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionService {
  payload: ICreateQuestion = {
    alternatives: [],
    pontuation: 0,
    title: '',
    topic: 0,
  };

  isLoading: boolean = false;

  constructor(
    private questionsService: QuestionsService,
    private notifier: NotificationsDeliveryService
  ) {}

  onSubmit() {
    this.isLoading = true;

    this.questionsService
      .onCreate(this.payload)
      .subscribe(() => {
        this.notifier.success('Question created with success!');
        window.location.reload();
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
