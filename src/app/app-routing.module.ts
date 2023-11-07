import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./modules/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./modules/questions/questions.module').then(
        (m) => m.QuestionsModule
      ),
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./modules/lessons/lessons.module').then((m) => m.LessonsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
