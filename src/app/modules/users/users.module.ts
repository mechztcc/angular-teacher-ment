import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';

@NgModule({
  declarations: [CreateAccountPageComponent, FormCreateAccountComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
