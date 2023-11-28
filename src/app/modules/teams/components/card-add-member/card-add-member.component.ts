import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faPlusCircle,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/modules/users/shared/services/users/users.service';
import { IUser } from 'src/app/modules/users/shared/types/user.interface';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { TeamsService } from '../../shared/services/teams.service';

@Component({
  selector: 'app-card-add-member',
  templateUrl: './card-add-member.component.html',
  styleUrls: ['./card-add-member.component.scss'],
})
export class CardAddMemberComponent implements OnInit {
  icons = {
    add: faPlusCircle,
    users: faUsers,
    user: faUser,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  user: IUser;
  isLoading: boolean = false;

  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    public modalRender: ModalRenderService,
    private usersService: UsersService,
    private routes: ActivatedRoute,
    private teamsService: TeamsService,
    private notifier: NotificationsDeliveryService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
    });
  }

  onSearch() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    const email = this.form.controls['email'].value;
    this.usersService
      .findByEmail(email)
      .subscribe((data) => {
        if (data.id) {
          this.user = data;
          this.errorMsg = null;
        }

        if (data['message']) {
          this.user = null;
          this.errorMsg = data['message'];
        }
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  onInvite() {
    if (!this.user) {
      return;
    }

    this.isLoading = true;

    const payload = {
      teamId: Number(this.routes.params['_value'].id),
      userId: this.user.id,
    };

    this.teamsService
      .inviteMember(payload)
      .subscribe((data) => {
        this.notifier.success('User has been requested to join this Team');
        window.location.reload();
        this.form.reset();
        this.user = null;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
