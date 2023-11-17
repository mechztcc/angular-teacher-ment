import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isHidden: boolean = true;

  get user(): string {
    return localStorage.getItem('user');
  }

  get role(): string {
    return localStorage.getItem('role');
  }

  constructor() {}

  ngOnInit(): void {}

  onHandle() {
    this.isHidden = !this.isHidden;
  }

  onCloseFromView(event: any) {
    const isFrame = Array(event.target.classList);
    if (isFrame[0]['value'].includes('frame')) {
      this.isHidden = true;
    }
  }
}
