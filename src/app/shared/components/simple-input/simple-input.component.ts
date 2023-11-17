import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SimpleInputComponent),
    },
  ],
})
export class SimpleInputComponent implements ControlValueAccessor {
  @Output() valueChange = new EventEmitter<string>();

  public options;
  public onChange = (value: string) => {};
  public onTouched = () => {};
  value: any;

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

  activate(value: any) {
    this.value = value;
    this.valueChange.emit(this.value);
    this.writeValue(this.value);
  }
}
