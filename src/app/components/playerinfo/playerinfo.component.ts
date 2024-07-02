import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css'],
})
export class PlayerinfoComponent implements OnInit {
  id: any;
  player: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private pService: PlayerService
  ) {}

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.pService.getPlayerById(this.id).subscribe((data) => {
      this.player = data.player;
    });
  }
}
