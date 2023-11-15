import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  faBolt,
  faCalendar,
  faImage,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
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

  @Output() emitter: EventEmitter<number> = new EventEmitter();

  isDrag: boolean = false;

  icons = {
    bolt: faBolt,
    edit: faPen,
    calendar: faCalendar,
    image: faImage,
    delete: faTrash,
  };

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
}
