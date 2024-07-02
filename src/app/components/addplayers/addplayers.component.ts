import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css'],
})
export class AddplayersComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = {};

  constructor(private pServise: PlayerService, private router: Router) {}

  ngOnInit(): void {}
  addPlayer() {
    this.pServise.addPlayer(this.player).subscribe((response) => {
      console.log(response.isAdded);
      this.router.navigate(['admin']);
    });
  }
}
