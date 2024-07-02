import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  playersTab: any;

  constructor(private pService: PlayerService) {}

  ngOnInit(): void {
    this.pService.getAllPlayeres().subscribe((response) => {
      console.log('here response from DB', response.players);
      this.playersTab = response.players;
    });
  }
}
