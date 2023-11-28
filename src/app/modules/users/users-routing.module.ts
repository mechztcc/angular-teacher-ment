import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: ':id/details', component: UserDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
