import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-image-render',
  templateUrl: './card-image-render.component.html',
  styleUrls: ['./card-image-render.component.scss'],
})
export class CardImageRenderComponent {
  icons = {
    image: faImage,
  };
}
