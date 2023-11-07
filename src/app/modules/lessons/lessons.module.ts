import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { CardLessonComponent } from './components/card-lesson/card-lesson.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';

@NgModule({
  declarations: [ListLessonsPageComponent, CardLessonComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    PrimaryButtonModule,
    FontAwesomeModule,
    BadgeModule
  ],
})
export class LessonsModule {}
