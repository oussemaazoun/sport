import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.css'],
})
export class AddteamsComponent implements OnInit {
  teamForm!: FormGroup;
  team: any = {};
  constructor(private tService: TeamService, private router: Router) {}

  ngOnInit(): void {}
  addTeam() {
    this.tService.addTeam(this.team).subscribe((response) => {
      console.log(response.isAdded);
      this.router.navigate(['admin']);
    });
  }
}
