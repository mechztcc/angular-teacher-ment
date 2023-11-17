import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorizationRequiredGuard } from './shared/guards/authorization-required.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./modules/teams/teams.module').then((m) => m.TeamsModule),
    canActivate: [authorizationRequiredGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [authorizationRequiredGuard],
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./modules/questions/questions.module').then(
        (m) => m.QuestionsModule
      ),
    canActivate: [authorizationRequiredGuard],
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./modules/lessons/lessons.module').then((m) => m.LessonsModule),
    canActivate: [authorizationRequiredGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
