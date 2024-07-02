import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playerstable',
  templateUrl: './playerstable.component.html',
  styleUrls: ['./playerstable.component.css'],
})
export class PlayerstableComponent implements OnInit {
  playerTab: any;
  constructor(private route: Router, private pService: PlayerService) {}

  ngOnInit(): void {
    this.pService.getAllPlayeres().subscribe((response) => {
      console.log('here response from DB', response.players);
      this.playerTab = response.players;
    });
  }
  goToPlayerInfo(id: number) {
    this.route.navigate([`playerinfo/${id}`]);
  }
  deletePlayer(id: any) {
    this.pService.deletePlayer(id).subscribe((response) => {
      if (response.isDelited) {
        this.pService.getAllPlayeres().subscribe((data) => {
          this.playerTab = data.players;
        });
      }
    });
  }
  goToEditPlayer(id: any) {
    this.route.navigate([`editplayer/${id}`]);
  }
}
