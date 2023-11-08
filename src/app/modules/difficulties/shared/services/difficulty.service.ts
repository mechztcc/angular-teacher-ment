import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDifficulty } from '../types/difficulty.interface';

const api = '/difficulties';
@Injectable({
  providedIn: 'root',
})
export class DifficultyService {
  constructor(private http: HttpClient) {}

  index(): Observable<IDifficulty[]> {
    return this.http.get<IDifficulty[]>(`${api}`);
  }
}
