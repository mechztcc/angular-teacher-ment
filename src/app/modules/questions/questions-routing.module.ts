import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

const routes: Routes = [
  { path: '', component: QuestionsPageComponent },
  { path: 'create', component: CreateQuestionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
