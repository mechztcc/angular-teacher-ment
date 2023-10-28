import { Component } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss'],
})
export class FormCreateAccountComponent {
  icons = {
    password: faLock,
    email: faEnvelope
  };
}
