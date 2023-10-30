import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faEnvelope,
  faEye,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss'],
})
export class FormCreateAccountComponent implements OnInit {
  icons = {
    password: faEye,
    email: faEnvelope,
    google: faGoogle,
    ok: faCheckCircle,
  };

  get formControls() {
    return this.form.controls;
  }
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      email: ['', Validators.email],
      password: [
        '',
        Validators.compose([Validators.min(5), Validators.required]),
      ],
    });
  }

  isLoading: boolean = false;
  onSubmit() {
    console.log(this.formControls['password']);
  }
}
