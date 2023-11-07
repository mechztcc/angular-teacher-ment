import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLessonsPageComponent } from './pages/list-lessons-page/list-lessons-page.component';

const routes: Routes = [{ path: '', component: ListLessonsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
