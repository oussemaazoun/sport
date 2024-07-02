import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddmatchsComponent } from './components/addmatchs/addmatchs.component';
import { AddteamsComponent } from './components/addteams/addteams.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchstableComponent } from './components/matchstable/matchstable.component';
import { PlayerstableComponent } from './components/playerstable/playerstable.component';
import { TeamstabComponent } from './components/teamstab/teamstab.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { StarPipe } from './pipes/star.pipe';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddmatchsComponent,
    AddteamsComponent,
    AddplayersComponent,
    MatchsComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    MatchstableComponent,
    PlayerstableComponent,
    TeamstabComponent,
    MatchinfoComponent,
    TeamInfoComponent,
    PlayerinfoComponent,
    ReversePipe,
    StarPipe,
    SearchComponent,
    EditMatchComponent,
    EditTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
