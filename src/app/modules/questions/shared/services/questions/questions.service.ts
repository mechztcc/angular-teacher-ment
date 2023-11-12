import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateQuestion } from '../../types/create-question.interface';
import { Observable } from 'rxjs';

const api = '/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  onCreate(payload: ICreateQuestion): Observable<any> {
    return this.http.post<any>(`${api}`, payload);
  }
}
