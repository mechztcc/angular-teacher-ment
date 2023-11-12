import { Component, OnInit } from '@angular/core';
import { TopicsService } from 'src/app/modules/topics/shared/services/topics.service';
import { ITopic } from 'src/app/modules/topics/shared/types/topic.interface';
import { CreateQuestionService } from '../../shared/services/create-question/create-question.service';

@Component({
  selector: 'app-create-question-category',
  templateUrl: './create-question-category.component.html',
  styleUrls: ['./create-question-category.component.scss'],
})
export class CreateQuestionCategoryComponent implements OnInit {
  isLoading: boolean = false;
  topics: ITopic[] = [];

  selected: ITopic;

  constructor(
    private topicService: TopicsService,
    public store: CreateQuestionService
  ) {}

  ngOnInit(): void {
    this.find();
  }

  find() {
    this.topicService.index().subscribe((data) => {
      this.topics = data;
    });
  }

  onSelect(topic: ITopic) {
    this.selected = topic;
    this.store.payload.topic = topic.id;
  }
}
