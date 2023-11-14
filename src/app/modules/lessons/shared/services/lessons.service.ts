import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILessonInterface } from '../types/lesson.interface';

const api = '/lessons';
@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor(private http: HttpClient) {}

  onCreate(payload: { name: string }): Observable<any> {
    return this.http.post<any>(`${api}`, payload);
  }

  addQuestion(payload: {
    questionId: number;
    lessonId: number;
  }): Observable<any> {
    return this.http.post<any>(`${api}/add-question`, payload);
  }

  removeQuestion(payload: {
    questionId: number;
    lessonId: number;
  }): Observable<any> {
    return this.http.put<any>(`${api}/remove-question`, payload);
  }

  index(): Observable<any> {
    return this.http.get<ILessonInterface[]>(`${api}`);
  }

  details(id: number): Observable<ILessonInterface> {
    return this.http.get<ILessonInterface>(`${api}/${id}`);
  }
}
