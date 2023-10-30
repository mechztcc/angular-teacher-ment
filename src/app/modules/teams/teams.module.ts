import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { ListTeamsPageComponent } from './pages/list-teams-page/list-teams-page.component';


@NgModule({
  declarations: [
    ListTeamsPageComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
