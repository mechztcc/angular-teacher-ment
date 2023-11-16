import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade.animation';
import { WindowService } from 'src/app/shared/services/window.service';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
  animations: [fade],
})
export class CreateAccountPageComponent implements OnInit {
  constructor(public readonly windowService: WindowService) {}

  ngOnInit(): void {
    localStorage.clear();
  }
}
