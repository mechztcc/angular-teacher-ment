import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateAccount } from '../../types/create-account.interface';

const api = '/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createAccount(payload: ICreateAccount): Observable<any> {
    return this.http.post<any>(`${api}`, payload);
  }
}
