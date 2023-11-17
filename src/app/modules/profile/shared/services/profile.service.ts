import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileDetails } from '../types/profile-details.interface';
import { IPersonalInformation } from '../types/personal-information.interface';

const api = '/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  findDetails(): Observable<IProfileDetails> {
    return this.http.get<IProfileDetails>(`${api}`);
  }

  updateProfile(
    payload: IPersonalInformation
  ): Observable<IPersonalInformation> {
    return this.http.post<IPersonalInformation>(`${api}`, payload);
  }
}
