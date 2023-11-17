import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faBuildingWheat,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ProfileService } from '../../shared/services/profile.service';
import { IPersonalInformation } from '../../shared/types/personal-information.interface';
import { IProfileDetails } from '../../shared/types/profile-details.interface';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit, OnChanges {
  @Input() details: IProfileDetails;

  isLoading: boolean = false;

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

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private notifier: NotificationsDeliveryService
  ) {}

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
    this.formControls['city'].setValue(this.details?.profile?.city);
    this.formControls['state'].setValue(this.details?.profile?.state);
    this.formControls['phone'].setValue(this.details?.profile?.phone);
    this.formControls['organization'].setValue(
      this.details?.profile?.organization
    );

    this.form.controls['name'];
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    const payload: IPersonalInformation = {
      state: this.formControls['state'].value,
      city: this.formControls['city'].value,
      phone: this.formControls['phone'].value,
      organization: this.formControls['organization'].value,
    };

    this.profileService
      .updateProfile(payload)
      .subscribe((data) => {
        this.notifier.success('Personal informations updated!');
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
