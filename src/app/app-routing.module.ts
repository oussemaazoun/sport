import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddmatchsComponent } from './components/addmatchs/addmatchs.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { AddteamsComponent } from './components/addteams/addteams.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { SearchComponent } from './components/search/search.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'addmatchs', component: AddmatchsComponent },
  { path: 'addplayers', component: AddplayersComponent },
  { path: 'addteams', component: AddteamsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'matchs', component: MatchsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'matchinfo/:id', component: MatchinfoComponent },
  { path: 'teaminfo/:id', component: TeamInfoComponent },
  { path: 'playerinfo/:id', component: PlayerinfoComponent },
  { path: 'search', component: SearchComponent },
  { path: 'edit-match/:id', component: EditMatchComponent },
  { path: 'edit-team/:id', component: EditTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
