import { Component, HostListener, OnInit } from '@angular/core';
import { WindowService } from './shared/services/window.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowService.width = event.target.innerWidth;
    this.windowService.height = event.target.innerHeight;
  }

  @HostListener('window:load', ['$event'])
  onInit(event: any) {
    this.windowService.width = event.target.innerWidth;
    this.windowService.height = event.target.innerHeight;
  }

  title = 'teacher-ment-front';

  constructor(
    private windowService: WindowService,
    private theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.theme.onVerify();
  }
}
