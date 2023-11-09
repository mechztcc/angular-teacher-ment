import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeLevelModule } from 'src/app/shared/components/badge-level/badge-level.module';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { InputSelectModule } from 'src/app/shared/components/input-select/input-select.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { CardImageRenderComponent } from './components/card-image-render/card-image-render.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { CreateQuestionLevelComponent } from './components/create-question-level/create-question-level.component';
import { CreateQuestionCategoryComponent } from './components/create-question-category/create-question-category.component';
import { CreateQuestionScoreComponent } from './components/create-question-score/create-question-score.component';

@NgModule({
  declarations: [
    QuestionsPageComponent,
    CardQuestionComponent,
    CreateQuestionComponent,
    CreateQuestionPageComponent,
    CardImageRenderComponent,
    CreateQuestionLevelComponent,
    CreateQuestionCategoryComponent,
    CreateQuestionScoreComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FontAwesomeModule,
    BadgeModule,
    PrimaryButtonModule,
    InputFloatingTextModule,
    InputSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BadgeLevelModule,
  ],
})
export class QuestionsModule {}
