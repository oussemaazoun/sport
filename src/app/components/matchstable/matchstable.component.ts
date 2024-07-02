import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchstable',
  templateUrl: './matchstable.component.html',
  styleUrls: ['./matchstable.component.css'],
})
export class MatchstableComponent implements OnInit {
  matchesTab: any = [];
  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe((response) => {
      console.log('here response from DB', response.matches);
      this.matchesTab = response.matches;
    });
  }
  goToInfo(id: number) {
    this.router.navigate([`matchinfo/${id}`]);
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatch(id).subscribe((response) => {
      if (response.isDelited) {
        this.matchService.getAllMatches().subscribe((data) => {
          this.matchesTab = data.matches;
        });
      }
    });
  }
  scoreResult(a: number, b: number, T1: string) {
    if (a > b) {
      return [T1 + ' win', 'green'];
    } else if (a < b) {
      return [T1 + ' lose', 'red'];
    } else {
      return ['score null', 'blue'];
    }
  }
  editMatch(id: any) {
    this.router.navigate([`edit-match/${id}`]);
  }
}
