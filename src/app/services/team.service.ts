import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamURL: string = 'http://localhost:3000/api/teams';
  constructor(private http: HttpClient) {}
  addTeam(team: any) {
    return this.http.post<{ isAdded: boolean }>(this.teamURL, team);
  }
  editTeam(teamObj: any) {
    return this.http.put<{ isEdited: boolean }>(this.teamURL, teamObj);
  }
  deleteTeam(id: any) {
    return this.http.delete<{ isDelited: boolean }>(`${this.teamURL}/${id}`);
  }
  getTeamById(id: any) {
    return this.http.get<{ team: any }>(`${this.teamURL}/${id}`);
  }
  getAllTeames() {
    return this.http.get<{ teams: any }>(this.teamURL);
  }
}
