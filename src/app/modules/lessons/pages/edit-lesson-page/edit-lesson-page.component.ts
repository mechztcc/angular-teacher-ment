import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faCalendar,
  faClock,
  faLock,
  faPlusCircle,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import { LessonsService } from '../../shared/services/lessons.service';
import { ActivatedRoute } from '@angular/router';
import { ILessonInterface } from '../../shared/types/lesson.interface';
import { TopicsService } from 'src/app/modules/topics/shared/services/topics.service';
import { ITopic } from 'src/app/modules/topics/shared/types/topic.interface';
import { IQuestion } from 'src/app/modules/questions/shared/types/question';
import { QuestionsService } from 'src/app/modules/questions/shared/services/questions/questions.service';

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
    puzzle: faPuzzlePiece
  };

  details: ILessonInterface;
  isLoading: boolean = false;
  isLoadingTopics: boolean = false;
  isLoadingQuestions: boolean = false;

  topics: ITopic[] = [];

  questions: IQuestion[] = [];
  filteredQuestions: IQuestion[] = [];

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute,
    private topicsService: TopicsService,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.find();
    this.findTopics();
    this.findQuestions();
  }

  findTopics() {
    this.isLoadingTopics = true;
    this.topicsService
      .index()
      .subscribe((data) => {
        this.topics = data;
      })
      .add(() => {
        this.isLoadingTopics = false;
      });
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

  findQuestions() {
    this.isLoadingQuestions = true;
    this.questionsService
      .index()
      .subscribe((data) => {
        this.questions = data;
        this.filteredQuestions = data;
      })
      .add(() => {
        this.isLoadingQuestions = false;
      });
  }

  onFilter(filters: any[]) {
    if (!filters.length) {
      this.filteredQuestions = this.questions;
      return;
    }

    const names = filters.map((filter) => {
      return filter.name;
    });

    let filteredQuest = [];
    this.questions.map((question) => {
      if (names.includes(question.topic.name)) {
        filteredQuest.push(question);
      }
    });

    this.filteredQuestions = filteredQuest;
  }
}
