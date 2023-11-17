import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { TeamsService } from '../../shared/services/teams.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {
  icons = {
    name: faUsers,
  };
  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  isLoading: boolean = false;

  constructor(
    public modalRender: ModalRenderService,
    private fb: FormBuilder,
    private teamsService: TeamsService,
    private notifier: NotificationsDeliveryService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    const payload = {
      name: this.formControls['name'].value,
    };

    this.teamsService
      .onCreate(payload)
      .subscribe((data) => {
        this.notifier.success('Team created with success');
        this.form.reset();
        this.modalRender.onClose();

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
