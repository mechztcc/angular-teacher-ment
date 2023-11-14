import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faCalendar,
  faClock,
  faLock,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { LessonsService } from '../../shared/services/lessons.service';
import { ActivatedRoute } from '@angular/router';
import { ILessonInterface } from '../../shared/types/lesson.interface';

@Component({
  selector: 'app-edit-lesson-page',
  templateUrl: './edit-lesson-page.component.html',
  styleUrls: ['./edit-lesson-page.component.scss'],
})
export class EditLessonPageComponent implements OnInit {
  question: string;

  icons = {
    calendar: faCalendar,
    clock: faClock,
    lock: faLock,
    book: faBook,
    plus: faPlusCircle,
  };

  details: ILessonInterface;
  isLoading: boolean = false;

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.find();
  }

  find() {
    this.isLoading = true;
    const { id } = this.routes.params['_value'];
    this.lessonsService
      .details(id)
      .subscribe((data) => {
        this.details = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
