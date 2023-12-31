import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { fade } from 'src/app/shared/animations/fade.animation';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { SessionsService } from 'src/app/shared/services/sessions.service';
import { UsersService } from '../../shared/services/users/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  animations: [fade],
})
export class FormLoginComponent implements OnInit {
  icons = {
    google: faGoogle,
    password: faEye,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private notifier: NotificationsDeliveryService,
    private usersService: UsersService,
    private router: Router,
    private sessionsService: SessionsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.min(6)]),
      ],
    });
  }

  onSuccess() {
    this.isLoading = true;
    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };

    this.usersService
      .login(payload)
      .subscribe((data) => {
        this.sessionsService.save('token', data.user.token);
        this.sessionsService.save('user', data.user.name);
        this.sessionsService.save('role', data.user.role);

        this.notifier.success('Login has made with success! Redirecting...');
        this.router.navigate(['/']);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
