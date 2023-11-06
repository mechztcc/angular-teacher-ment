import { Component } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found-content',
  templateUrl: './not-found-content.component.html',
  styleUrls: ['./not-found-content.component.scss'],
})
export class NotFoundContentComponent {
  icons = {
    count: faDatabase,
  };
}
