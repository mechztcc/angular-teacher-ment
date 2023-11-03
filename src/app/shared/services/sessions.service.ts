import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor() {}

  save(name: string, value: unknown) {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
