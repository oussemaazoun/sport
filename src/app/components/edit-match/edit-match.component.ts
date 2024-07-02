import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css'],
})
export class EditMatchComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};
  id: any;

  constructor(
    private mService: MatchService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.mService.getMatchById(this.id).subscribe((data) => {
      this.match = data.matche;
    });
  }
  editMatch() {
    this.mService.editMatch(this.match).subscribe((response) => {
      console.log('edited', response.isEdited);
      this.router.navigate(['admin']);
    });
  }
}
