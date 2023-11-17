import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  faBuildingWheat,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IProfileDetails } from '../../shared/types/profile-details.interface';
import { IProfile } from '../../shared/types/profile.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit, OnChanges {
  @Input() details: IProfileDetails;

  icons = {
    user: faUser,
    email: faEnvelope,
    phone: faPhone,
    build: faBuildingWheat,
    location: faLocationDot,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
    this.fillForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.fillForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      organization: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  fillForm() {
    this.formControls['name'].setValue(this.details.name);
    this.formControls['email'].setValue(this.details.email);
    this.formControls['city'].setValue(this.details.profile.city);
    this.formControls['state'].setValue(this.details.profile.state);
    this.formControls['phone'].setValue(this.details.profile.phone);
    this.formControls['organization'].setValue(
      this.details?.profile.organization
    );

    (this.form.controls['name']);
  }
}
