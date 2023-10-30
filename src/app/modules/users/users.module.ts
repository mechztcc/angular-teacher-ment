import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAccountPageComponent, FormCreateAccountComponent],
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
