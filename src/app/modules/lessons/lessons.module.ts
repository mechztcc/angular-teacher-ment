import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';


@NgModule({
  declarations: [
    ListLessonsPageComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
