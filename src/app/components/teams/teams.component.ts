import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teamsTab: any;
  constructor(private tService: TeamService) {}

  ngOnInit(): void {
    this.tService.getAllTeames().subscribe((response) => {
      console.log('here response from DB', response.teams);
      this.teamsTab = response.teams;
    });
  }
}
