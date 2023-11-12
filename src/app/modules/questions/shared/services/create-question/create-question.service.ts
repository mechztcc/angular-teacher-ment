import { Injectable } from '@angular/core';
import { ICreateQuestion } from '../../types/create-question.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateQuestionService {


  payload: ICreateQuestion;

  constructor() { }
}
