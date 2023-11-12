import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CreateQuestionService } from '../../shared/services/create-question/create-question.service';

@Component({
  selector: 'app-create-question-alternatives',
  templateUrl: './create-question-alternatives.component.html',
  styleUrls: ['./create-question-alternatives.component.scss'],
})
export class CreateQuestionAlternativesComponent implements OnInit {
  icons = {
    error: faXmarkCircle,
    check: faCheckCircle,
  };

  alternativesCount: number[] = [1];

  get alternativesTotal() {
    return this.alternativesCount[0];
  }

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, public store: CreateQuestionService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      wrong1: [''],
      wrong2: [''],
      wrong3: [''],
      wrong4: [''],
      correct: [''],
    });
  }

  onHandleAlternatives(index: number) {
    if (this.alternativesCount[index]) {
      this.alternativesCount.splice(index, 1);
      return;
    }

    if (this.alternativesCount.length <= 4) {
      this.alternativesCount.push(index);
    }
  }

  setCount(value: number) {
    this.alternativesCount = [];
    for (let index = 0; index < value; index++) {
      this.alternativesCount.push(value);
    }
  }

  validate() {
    let alternatives = [
      { title: this.formControls['wrong1'].value, isCorrect: false },
      { title: this.formControls['wrong2'].value, isCorrect: false },
      { title: this.formControls['wrong3'].value, isCorrect: false },
      { title: this.formControls['wrong4'].value, isCorrect: false },
      { title: this.formControls['correct'].value, isCorrect: true },
    ];

    this.store.payload.alternatives = alternatives.filter((el) => {
      return el.title;
    });

    this.store.onSubmit();
  }
}
