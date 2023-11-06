import { Component, Input } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-cards-informations',
  templateUrl: './cards-informations.component.html',
  styleUrls: ['./cards-informations.component.scss'],
  animations: [fade],
})
export class CardsInformationsComponent {
  @Input() count: number;
  @Input() label: string;
  @Input() type: number;
}
