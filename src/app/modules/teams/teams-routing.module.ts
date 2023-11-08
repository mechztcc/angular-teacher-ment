import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeamsPageComponent } from './pages/list-teams-page/list-teams-page.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';

const routes: Routes = [
  { path: '', component: ListTeamsPageComponent },
  { path: 'details/:id', component: TeamDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
