import { Component, OnInit } from '@angular/core';
import { DifficultyService } from 'src/app/modules/difficulties/shared/services/difficulty.service';
import { IDifficulty } from 'src/app/modules/difficulties/shared/types/difficulty.interface';

@Component({
  selector: 'app-create-question-level',
  templateUrl: './create-question-level.component.html',
  styleUrls: ['./create-question-level.component.scss'],
})
export class CreateQuestionLevelComponent implements OnInit {
  isLoading: boolean = false;
  difficulties: IDifficulty[] = [];

  selected: IDifficulty;

  constructor(private difficultiesService: DifficultyService) {}

  ngOnInit(): void {
    this.findDifficulties();
  }

  onSelect(difficulty: IDifficulty) {
    this.selected = difficulty;
  }

  findDifficulties() {
    this.difficultiesService
      .index()
      .subscribe((data) => {
        this.difficulties = data;
      })
      .add(() => {});
  }
}
