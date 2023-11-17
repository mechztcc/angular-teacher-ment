import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  fa1,
  fa2,
  fa3,
  faBook,
  faCheckCircle,
  faCircleXmark,
  faImage,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.scss'],
})
export class CreateQuestionPageComponent implements OnInit {



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
      images: [0, Validators.required],
    });
  }

  howManyImages = [
    { name: 'none', id: 0 },
    { name: '1', id: 1 },
    { name: '2', id: 2 },
    { name: '3', id: 3 },
  ];

  categories = [
    { id: 1, name: 'Matemática' },
    { id: 2, name: 'Português' },
    { id: 3, name: 'História' },
    { id: 4, name: 'Inglês' },
  ];

  difficulties = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Normal' },
    { id: 3, name: 'Hard' },
    { id: 4, name: 'Hard++' },
    { id: 5, name: 'Expert' },
  ];

  icons = {
    image: faImage,
    book: faBook,
    error: faCircleXmark,
    check: faCheckCircle,
  };
}
