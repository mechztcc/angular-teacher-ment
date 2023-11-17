import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { LoadingPageModule } from 'src/app/shared/components/loading-page/loading-page.module';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';
import { SimpleInputModule } from 'src/app/shared/components/simple-input/simple-input.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { BackNavegationModule } from 'src/app/shared/components/back-navegation/back-navegation.module';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    PersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    BadgeModule,
    SimpleButtonModule,
    HttpClientModule,
    LoadingPageModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleInputModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BackNavegationModule
  ],
  providers: [provideNgxMask()],
})
export class ProfileModule {}
