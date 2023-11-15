import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsDeliveryService } from 'src/app/shared/services/notifications-delivery.service';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-close-lesson',
  templateUrl: './close-lesson.component.html',
  styleUrls: ['./close-lesson.component.scss'],
})
export class CloseLessonComponent {
  isLoading: boolean = false;

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute,
    private notifier: NotificationsDeliveryService
  ) {}

  onClose() {
    this.isLoading = true;
    const { id } = this.routes.params['value'];

    this.lessonsService
      .closeLesson(id)
      .subscribe((data) => {
        this.notifier.success('This lesson has been closed');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
