import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faEnvelope,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../shared/services/users/users.service';

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

  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

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

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    const payload = {
      name: this.formControls['name'].value,
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };

    this.usersService
      .createAccount(payload)
      .subscribe(console.log)
      .add(() => {
        this.isLoading = false;
      });
  }
}
