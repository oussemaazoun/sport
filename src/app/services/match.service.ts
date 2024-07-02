import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  // matchURL => BE server address
  matchURL: string = 'http://localhost:3000/api/matches';
  constructor(private http: HttpClient) {}
  addMatch(match: any) {
    return this.http.post<{ isAdded: boolean }>(this.matchURL, match);
  }
  editMatch(matchObj: any) {
    return this.http.put<{ isEdited: boolean }>(this.matchURL, matchObj);
  }
  deleteMatch(id: any) {
    return this.http.delete<{ isDelited: boolean }>(`${this.matchURL}/${id}`);
  }
  getMatchById(id: any) {
    return this.http.get<{ matche: any }>(`${this.matchURL}/${id}`);
  }
  getAllMatches() {
    return this.http.get<{ matches: any }>(this.matchURL);
  }
  searchMatchesByScores(searchObj: any) {
    return this.http.post<{ searchT: any }>(
      this.matchURL + '/search',
      searchObj
    );
  }
}
