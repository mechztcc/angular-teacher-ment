import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/modules/teams/shared/services/teams.service';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';

@Component({
  selector: 'app-card-create-new-team',
  templateUrl: './card-create-new-team.component.html',
  styleUrls: ['./card-create-new-team.component.scss'],
})
export class CardCreateNewTeamComponent implements OnInit {
  icons = {
    name: faUsers,
  };

  isLoading: boolean = false;

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

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
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
