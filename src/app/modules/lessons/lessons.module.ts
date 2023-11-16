import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeLevelModule } from 'src/app/shared/components/badge-level/badge-level.module';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { ComboboxModule } from 'src/app/shared/components/combobox/combobox.module';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { InputSelectModule } from 'src/app/shared/components/input-select/input-select.module';
import { LoadingPageModule } from 'src/app/shared/components/loading-page/loading-page.module';
import { NotFoundContentModule } from 'src/app/shared/components/not-found-content/not-found-content.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';
import { QuestionsModule } from '../questions/questions.module';
import { CardLessonComponent } from './components/card-lesson/card-lesson.component';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { QuestionsDraggablesComponent } from './components/questions-draggables/questions-draggables.component';
import { QuestionsDropZoneComponent } from './components/questions-drop-zone/questions-drop-zone.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { EditLessonPageComponent } from './pages/edit-lesson-page/edit-lesson-page.component';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';
import { OpenLessonComponent } from './open-lesson/open-lesson.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CloseLessonComponent } from './close-lesson/close-lesson.component';
import { BackNavegationModule } from 'src/app/shared/components/back-navegation/back-navegation.module';

@NgModule({
  declarations: [
    ListLessonsPageComponent,
    CardLessonComponent,
    CreateLessonComponent,
    EditLessonPageComponent,
    QuestionsDropZoneComponent,
    QuestionsDraggablesComponent,
    OpenLessonComponent,
    CloseLessonComponent,
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
    NotFoundContentModule,
    BadgeLevelModule,
    QuestionsModule,
    SimpleButtonModule,
    ComboboxModule,
    LoadingPageModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BackNavegationModule,
    LoadingPageModule
  ],
  providers: [provideNgxMask()],
})
export class LessonsModule {}
