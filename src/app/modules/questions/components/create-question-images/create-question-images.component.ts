import { Component } from '@angular/core';

@Component({
  selector: 'app-create-question-images',
  templateUrl: './create-question-images.component.html',
  styleUrls: ['./create-question-images.component.scss'],
})
export class CreateQuestionImagesComponent {
  images: number[] = [];

  onSelect(value: number) {
    this.images = [];
    if (this.images.includes(value)) {
      this.images = this.images.filter((el) => el !== value);
      return;
    }

    for (let index = 0; index < value; index++) {
      this.images.push(value);
    }
  }
}
