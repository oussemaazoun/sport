import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css'],
})
export class MatchinfoComponent implements OnInit {
  id: any;
  matche: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe((response) => {
      this.matche = response.matche;
    });
  }
}
