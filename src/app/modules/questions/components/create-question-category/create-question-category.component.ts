import { Component } from '@angular/core';
import { IDifficulty } from 'src/app/modules/difficulties/shared/types/difficulty.interface';

@Component({
  selector: 'app-create-question-category',
  templateUrl: './create-question-category.component.html',
  styleUrls: ['./create-question-category.component.scss'],
})
export class CreateQuestionCategoryComponent {
  isLoading: boolean = false;
  difficulties: IDifficulty[] = [];


  constructor() {}
}
