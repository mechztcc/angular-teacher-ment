import { Component } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fade]
})
export class HomePageComponent {

}
