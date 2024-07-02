import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  teamForm!: FormGroup;
  team: any = {};
  id: any;
  constructor(
    private tService: TeamService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.tService
      .getTeamById(this.id)
      .subscribe((data) => (this.team = data.team));
  }
  editTeam() {
    this.tService.addTeam(this.team).subscribe();
  }
}
