import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLessonPageComponent } from './pages/edit-lesson-page/edit-lesson-page.component';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';

const routes: Routes = [
  { path: '', component: ListLessonsPageComponent },
  { path: ':id/edit', component: EditLessonPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
