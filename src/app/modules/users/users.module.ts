import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CreateAccountPageComponent, FormCreateAccountComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    InputFloatingTextModule,
    FontAwesomeModule,
  ],
})
export class UsersModule {}
