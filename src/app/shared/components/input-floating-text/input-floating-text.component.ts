import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-floating-text',
  templateUrl: './input-floating-text.component.html',
  styleUrls: ['./input-floating-text.component.scss'],
})
export class InputFloatingTextComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() appendIcon: IconDefinition = null;
  @Input() prependIcon: IconDefinition = null;
}
