import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

@NgModule({
  declarations: [QuestionsPageComponent, CardQuestionComponent, CreateQuestionComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FontAwesomeModule,
    BadgeModule,
    PrimaryButtonModule,
  ],
})
export class QuestionsModule {}
