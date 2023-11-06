import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [QuestionsPageComponent, CardQuestionComponent],
  imports: [CommonModule, QuestionsRoutingModule, FontAwesomeModule],
})
export class QuestionsModule {}
