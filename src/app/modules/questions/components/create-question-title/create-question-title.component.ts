import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { CreateQuestionService } from '../../shared/services/create-question/create-question.service';

@Component({
  selector: 'app-create-question-title',
  templateUrl: './create-question-title.component.html',
  styleUrls: ['./create-question-title.component.scss'],
})
export class CreateQuestionTitleComponent implements OnInit {
  icons = {
    book: faBook,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private store: CreateQuestionService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
    });
  }

  validate() {
    if (this.form.invalid) {
      return;
    }

    this.store.payload.title = this.formControls['title'].value;
    console.log(this.store.payload);
  }
}
