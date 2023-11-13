import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputSelectComponent),
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor {
  @Input() selections: any[];
  @Input() field: string;
  @Input() label: string;
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  value: any;

  public options;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  activate(event: any) {
    const index = event.target.options.selectedIndex;
    
    this.value = this.selections[index -1][this.field];
    
    this.valueChange.emit(this.value);
    this.writeValue(this.value);
  }
}
