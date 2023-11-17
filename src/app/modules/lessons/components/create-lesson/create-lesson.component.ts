import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBook, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { DifficultyService } from 'src/app/modules/difficulties/shared/services/difficulty.service';
import { TeamsService } from 'src/app/modules/teams/shared/services/teams.service';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { LessonsService } from '../../shared/services/lessons.service';
import { IDifficulty } from 'src/app/modules/difficulties/shared/types/difficulty.interface';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss'],
})
export class CreateLessonComponent implements OnInit {
  icons = {
    book: faBook,
    level: faChartSimple,
  };

  form: FormGroup;
  get formsControls() {
    return this.form.controls;
  }

  isLoading: boolean = false;
  isLoadingDiff: boolean = false;

  availableTeams: any[] = [];
  difficulties: IDifficulty[] = [];

  constructor(
    public modalRender: ModalRenderService,
    private fb: FormBuilder,
    private lessonsService: LessonsService,
    private teamsService: TeamsService,
    private notifier: NotificationsDeliveryService,
    private difficultiesService: DifficultyService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.findTeams();
    this.findDifficulties();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      teamId: ['', Validators.required],
      level: [0, Validators.required],
    });
  }

  findTeams() {
    this.isLoading = true;
    this.teamsService
      .index()
      .subscribe((data) => {
        this.availableTeams = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  findDifficulties() {
    this.isLoadingDiff = true;
    this.difficultiesService
      .index()
      .subscribe((data) => {
        this.difficulties = data;
      })
      .add(() => {
        this.isLoadingDiff = false;
      });
  }

  onSubmit() {
    (this.form);

    if (this.form.invalid) {
      return;
    }

    const payload = {
      name: this.formsControls['name'].value,
      teamId: Number(this.formsControls['teamId'].value),
      difficultyId: Number(this.formsControls['level'].value),
    };

    this.isLoading = true;

    this.lessonsService
      .onCreate(payload)
      .subscribe(() => {
        this.notifier.success('Lesson created with success!');
        this.form.reset();
        this.modalRender.onClose();
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
