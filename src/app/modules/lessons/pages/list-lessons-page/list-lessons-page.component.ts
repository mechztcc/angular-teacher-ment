import { Component, OnInit } from '@angular/core';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { LessonsService } from '../../shared/services/lessons.service';
import { ILessonInterface } from '../../shared/types/lesson.interface';

@Component({
  selector: 'app-list-lessons-page',
  templateUrl: './list-lessons-page.component.html',
  styleUrls: ['./list-lessons-page.component.scss'],
})
export class ListLessonsPageComponent implements OnInit {
  lessons: ILessonInterface[] = [];

  isLoading: boolean = false;

  icons = {
    book: faScroll,
  };
  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.isLoading = true;
    this.lessonsService
      .index()
      .subscribe((data) => {
        this.lessons = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
