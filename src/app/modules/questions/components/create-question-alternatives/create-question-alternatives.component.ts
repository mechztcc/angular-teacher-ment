import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor(private fb: FormBuilder) {}

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

  onSubmit() {
    console.log(this.formControls);
  }
}
