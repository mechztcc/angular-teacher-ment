import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileDetails } from '../types/profile-details.interface';

const api = '/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  findDetails(): Observable<IProfileDetails> {
    return this.http.get<IProfileDetails>(`${api}`);
  }
}
