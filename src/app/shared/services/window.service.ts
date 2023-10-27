import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  innerWidth: number = 0;
  innerHeight: number = 0;

  constructor() {}

  set width(value: number) {
    this.innerWidth = value;
  }

  set height(value: number) {
    this.innerHeight = value;
  }

  get width() {
    return this.innerWidth;
  }

  get height() {
    return this.innerHeight;
  }
}
