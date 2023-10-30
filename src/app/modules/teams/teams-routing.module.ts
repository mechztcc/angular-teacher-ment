import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeamsPageComponent } from './pages/list-teams-page/list-teams-page.component';

const routes: Routes = [{ path: '', component: ListTeamsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
