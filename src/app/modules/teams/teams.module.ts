import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeLevelModule } from 'src/app/shared/components/badge-level/badge-level.module';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { LoadingPageModule } from 'src/app/shared/components/loading-page/loading-page.module';
import { NotFoundContentModule } from 'src/app/shared/components/not-found-content/not-found-content.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SimpleButtonModule } from 'src/app/shared/components/simple-button/simple-button.module';
import { CardAddMemberComponent } from './components/card-add-member/card-add-member.component';
import { CardLessonRunningComponent } from './components/card-lesson-running/card-lesson-running.component';
import { CardMemberInfoComponent } from './components/card-member-info/card-member-info.component';
import { CardTeamMemberComponent } from './components/card-team-member/card-team-member.component';
import { CardTeamsListComponent } from './components/card-teams-list/card-teams-list.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ListTeamsPageComponent } from './pages/list-teams-page/list-teams-page.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  declarations: [
    ListTeamsPageComponent,
    CardTeamsListComponent,
    CreateTeamComponent,
    TeamDetailsPageComponent,
    CardTeamMemberComponent,
    CardLessonRunningComponent,
    CardAddMemberComponent,
    CardMemberInfoComponent,
  ],
  exports: [CreateTeamComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    PrimaryButtonModule,
    FontAwesomeModule,
    NotFoundContentModule,
    InputFloatingTextModule,
    BadgeModule,
    ReactiveFormsModule,
    FormsModule,
    BadgeModule,
    BadgeLevelModule,
    SimpleButtonModule,
    LoadingPageModule,
  ],
})
export class TeamsModule {}
