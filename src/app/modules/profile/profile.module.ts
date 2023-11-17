import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    BadgeModule,
    InputFloatingTextModule,
    SimpleButtonModule
  ]
})
export class ProfileModule { }
