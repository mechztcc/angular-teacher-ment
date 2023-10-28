import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() label: string;
  @Input() isLoading: boolean = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  icons = {
    load: faCircleNotch,
  };

  onClick() {
    this.clicked.emit();
  }
}
