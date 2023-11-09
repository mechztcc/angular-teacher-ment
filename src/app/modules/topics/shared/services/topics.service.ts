import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITopic } from '../types/topic.interface';
import { Observable } from 'rxjs';

const api = '/topic';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  index(): Observable<ITopic[]> {
    return this.http.get<ITopic[]>(`${api}`);
  }
}
