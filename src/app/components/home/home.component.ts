import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  match: any = {
    id: 1,
    scoreone: 3,
    scoretwo: 0,
    teamone: 'rmd',
    teamtwo: 'fcb',
  };

  constructor() {}

  ngOnInit(): void {}
}
