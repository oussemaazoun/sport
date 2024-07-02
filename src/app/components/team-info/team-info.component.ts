import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  id: any;
  teame: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private tService: TeamService
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.tService.getTeamById(this.id).subscribe((response) => {
      console.log(response.team);
      this.teame = response.team;
      console.log(this.teame);
    });
  }
}
