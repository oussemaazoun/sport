import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css'],
})
export class MatchsComponent implements OnInit {
  matchsTab: any = [];
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe((response) => {
      console.log('here response from DB', response.matches);
      this.matchsTab = response.matches;
    });
  }
}
