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
import { CreateQuestionAlternativesComponent } from './components/create-question-alternatives/create-question-alternatives.component';
import { CreateQuestionImagesComponent } from './components/create-question-images/create-question-images.component';
import { CreateQuestionTitleComponent } from './components/create-question-title/create-question-title.component';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';
import { BackNavegationModule } from 'src/app/shared/components/back-navegation/back-navegation.module';
import { LoadingPageModule } from 'src/app/shared/components/loading-page/loading-page.module';

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
    CreateQuestionAlternativesComponent,
    CreateQuestionImagesComponent,
    CreateQuestionTitleComponent,
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
    SimpleButtonModule,
    BackNavegationModule,
    LoadingPageModule
  ],
  exports: [CardQuestionComponent],
})
export class QuestionsModule {}
