import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchTab: any;
  constructor(
    private formBuilder: FormBuilder,
    private mService: MatchService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', [Validators.required]],
      scoreTwo: ['', [Validators.required]],
    });
  }
  search() {
    // this.searchTab=[];
    this.mService
      .searchMatchesByScores(this.searchForm.value)
      .subscribe((response) => {
        console.log('here response from DB', response.searchT);
        this.searchTab = response.searchT;
      });
  }
}
