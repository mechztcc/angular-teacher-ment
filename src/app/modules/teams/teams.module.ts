import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundContentModule } from 'src/app/shared/components/not-found-content/not-found-content.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { CardTeamsListComponent } from './components/card-teams-list/card-teams-list.component';
import { ListTeamsPageComponent } from './pages/list-teams-page/list-teams-page.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';

@NgModule({
  declarations: [ListTeamsPageComponent, CardTeamsListComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    PrimaryButtonModule,
    FontAwesomeModule,
    NotFoundContentModule,
    InputFloatingTextModule
  ],
})
export class TeamsModule {}
