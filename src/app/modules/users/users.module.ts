import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';

@NgModule({
  declarations: [
    CreateAccountPageComponent,
    FormCreateAccountComponent,
    LoginPageComponent,
    FormLoginComponent,
    UserDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    InputFloatingTextModule,
    FontAwesomeModule,
    PrimaryButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsersModule {}
