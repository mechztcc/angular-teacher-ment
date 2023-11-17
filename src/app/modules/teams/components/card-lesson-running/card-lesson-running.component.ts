import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faBook, faCalendar, faChartSimple, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ILessonInterface } from 'src/app/modules/lessons/shared/types/lesson.interface';
import { growRight } from 'src/app/shared/animations/grow-right.animation';

@Component({
  selector: 'app-card-lesson-running',
  templateUrl: './card-lesson-running.component.html',
  styleUrls: ['./card-lesson-running.component.scss'],
  animations: [growRight]
})
export class CardLessonRunningComponent implements OnChanges {
  @Input() lesson: ILessonInterface;
  
  icons = {
    level: faChartSimple,
    book: faBook,
    clock: faClock,
    users: faUsers,
    calendar: faCalendar
  };

  ngOnChanges(changes: SimpleChanges): void {
    (this.lesson.ExpirationDate[0].expiresAt);
    
  }
}
