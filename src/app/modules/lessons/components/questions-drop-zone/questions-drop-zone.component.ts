import { Component, Input } from '@angular/core';
import { IQuestion } from 'src/app/modules/questions/shared/types/question';
import { LessonsService } from '../../shared/services/lessons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-drop-zone',
  templateUrl: './questions-drop-zone.component.html',
  styleUrls: ['./questions-drop-zone.component.scss'],
})
export class QuestionsDropZoneComponent {
  @Input() questions: IQuestion[] = [];

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  onRemove(questionId: number) {
    const { id } = this.routes.params['_value'];

    this.lessonsService
      .removeQuestion({ lessonId: Number(id), questionId })
      .subscribe((data) => {
        window.location.reload();
      });
  }

  onDrop(event) {
    event.preventDefault();
    const question = event.dataTransfer.getData('text/plain');
    const { id } = this.routes.params['_value'];

    this.lessonsService
      .addQuestion({
        lessonId: Number(id),
        questionId: JSON.parse(question).id,
      })
      .subscribe((data) => {
        window.location.reload();
      });
  }
}
