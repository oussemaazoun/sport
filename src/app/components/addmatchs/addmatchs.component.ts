import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-addmatchs',
  templateUrl: './addmatchs.component.html',
  styleUrls: ['./addmatchs.component.css'],
})
export class AddmatchsComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};

  constructor(private nService: MatchService, private router: Router) {}
  addMatch() {
    console.log('match object', this.match);
    this.nService.addMatch(this.match).subscribe((response) => {
      console.log(response.isAdded);
      this.router.navigate(['admin']);
    });
  }

  ngOnInit(): void {}
}
