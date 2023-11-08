import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from '../types/team.interface';
import { ITeamDetails } from '../types/team-details.interface';

const api = '/teams';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  onCreate(payload: any): Observable<any> {
    return this.http.post<any>(`${api}`, payload);
  }

  index(): Observable<any> {
    return this.http.get<ITeam[]>(`${api}/owner`);
  }

  findDetails(id: string): Observable<ITeamDetails> {
    return this.http.get<ITeamDetails>(`${api}/details/${id}`);
  }
}
