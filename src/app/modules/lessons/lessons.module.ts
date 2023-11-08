import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { InputSelectModule } from 'src/app/shared/components/input-select/input-select.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { CardLessonComponent } from './components/card-lesson/card-lesson.component';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';

@NgModule({
  declarations: [
    ListLessonsPageComponent,
    CardLessonComponent,
    CreateLessonComponent,
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    PrimaryButtonModule,
    FontAwesomeModule,
    BadgeModule,
    ReactiveFormsModule,
    FormsModule,
    PrimaryButtonModule,
    InputFloatingTextModule,
    InputSelectModule,
  ],
})
export class LessonsModule {}
