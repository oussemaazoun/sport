import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  playerURL: string = 'http://localhost:3000/api/players';
  constructor(private http: HttpClient) {}
  login(user: any) {}
  signup(user: any) {}
}
