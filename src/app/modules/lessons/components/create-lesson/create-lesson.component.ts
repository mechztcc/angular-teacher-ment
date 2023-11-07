import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/modules/teams/shared/services/teams.service';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { LessonsService } from '../../shared/services/lessons.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss'],
})
export class CreateLessonComponent implements OnInit {
  icons = {
    book: faBook,
  };

  form: FormGroup;
  get formsControls() {
    return this.form.controls;
  }

  isLoading: boolean = false;

  availableTeams: any[] = [];

  constructor(
    public modalRender: ModalRenderService,
    private fb: FormBuilder,
    private lessonsService: LessonsService,
    private teamsService: TeamsService,
    private notifier: NotificationsDeliveryService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.findTeams();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      teamId: ['', Validators.required],
      level: [1, Validators.compose([Validators.max(5), Validators.required])]
    });
  }

  findTeams() {
    this.teamsService.index().subscribe((data) => {
      this.availableTeams = data;
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const payload = {
      name: this.formsControls['name'].value,
      teamId: Number(this.formsControls['teamId'].value),
      level: Number(this.formsControls['level'].value),
    };

    this.isLoading = true;

    this.lessonsService
      .onCreate(payload)
      .subscribe(() => {
        this.notifier.success('Lesson created with success!');
        this.modalRender.onClose();
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
