import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CreateAccountPageComponent, FormCreateAccountComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
  ],
})
export class UsersModule {}
