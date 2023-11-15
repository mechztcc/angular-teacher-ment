import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';
import { LessonsService } from '../shared/services/lessons.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';

@Component({
  selector: 'app-open-lesson',
  templateUrl: './open-lesson.component.html',
  styleUrls: ['./open-lesson.component.scss'],
})
export class OpenLessonComponent implements OnInit {
  form: FormGroup;

  isLoading: boolean = false;

  constructor(
    public modalRender: ModalRenderService,
    private fb: FormBuilder,
    private lessonsService: LessonsService,
    private routes: ActivatedRoute,
    private notifier: NotificationsDeliveryService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const value = this.form.controls['date'].value;

    const isDate = new Date(value).getDate();
    if (!isDate) {
      return;
    }

    const { id } = this.routes.params['value'];
    const payload = {
      expiresAt: new Date(value).toISOString(),
      lessonId: Number(id),
    };

    this.lessonsService
      .openQuestion(payload)
      .subscribe((data) => {
        this.notifier.success('Lesson has be send to team');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
