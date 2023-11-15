import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faBolt,
  faCalendar,
  faImage,
  faPen,
  faPlusCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { LessonsService } from 'src/app/modules/lessons/shared/services/lessons.service';
import { IQuestion } from '../../shared/types/question';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss'],
})
export class CardQuestionComponent {
  @Input() question: IQuestion;
  @Input() isEditabble: boolean = false;
  @Input() isDragabble: boolean = false;
  @Input() isDeletable: boolean = false;
  @Input() addClick: boolean = false;

  @Output() emitter: EventEmitter<number> = new EventEmitter();

  isDrag: boolean = false;

  icons = {
    bolt: faBolt,
    edit: faPen,
    calendar: faCalendar,
    image: faImage,
    delete: faTrash,
    add: faPlusCircle
  };

  constructor(
    private routes: ActivatedRoute,
    private lessonsService: LessonsService
  ) {}

  onRemove() {
    this.emitter.emit(this.question.id);
  }

  onDragStart(event: DragEvent) {
    this.isDrag = true;

    const question = JSON.stringify(this.question);
    event.dataTransfer.setData('text/plain', question);
  }

  onDragEnd() {
    this.isDrag = false;
  }

  onAddWithClick() {
    const { id } = this.routes.params['_value'];

    this.lessonsService
      .addQuestion({
        lessonId: Number(id),
        questionId: this.question.id,
      })
      .subscribe((data) => {
        window.location.reload();
      });
  }
}
