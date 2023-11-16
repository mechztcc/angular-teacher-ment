import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { LoadingPageModule } from 'src/app/shared/components/loading-page/loading-page.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';
import { TeamsModule } from '../teams/teams.module';
import { CardCreateNewTeamComponent } from './components/card-create-new-team/card-create-new-team.component';
import { CardLessonComponent } from './components/card-lesson/card-lesson.component';
import { CardsInformationsComponent } from './components/cards-informations/cards-informations.component';
import { OpenedLessonsComponent } from './components/opened-lessons/opened-lessons.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchContentComponent,
    CardsInformationsComponent,
    OpenedLessonsComponent,
    CardLessonComponent,
    CardCreateNewTeamComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputFloatingTextModule,
    FontAwesomeModule,
    PrimaryButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TeamsModule,
    SimpleButtonModule,
    LoadingPageModule,
    BadgeModule
  ],
  exports: [CardLessonComponent],
})
export class HomeModule {}
