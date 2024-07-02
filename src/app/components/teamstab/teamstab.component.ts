import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teamstab',
  templateUrl: './teamstab.component.html',
  styleUrls: ['./teamstab.component.css'],
})
export class TeamstabComponent implements OnInit {
  teamsTab: any = [];
  constructor(private router: Router, private tService: TeamService) {}

  ngOnInit(): void {
    this.tService.getAllTeames().subscribe((response) => {
      console.log('here response from DB', response.teams);
      this.teamsTab = response.teams;
    });
  }
  goToTeamInfo(id: number) {
    this.router.navigate([`teaminfo/${id}`]);
  }
  goToEditTeam(id: number) {
    this.router.navigate([`edit-team/${id}`]);
  }
}
