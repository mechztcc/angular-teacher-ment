import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-floating-text',
  templateUrl: './input-floating-text.component.html',
  styleUrls: ['./input-floating-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFloatingTextComponent),
    },
  ],
})
export class InputFloatingTextComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() appendIcon: IconDefinition = null;
  @Input() prependIcon: IconDefinition = null;
  @Input() formField: any;
  @Input() disabled: boolean = false;
  @Input() mask: string;
  @Input() dropSpecialCharacters: boolean = false;
  @Input() readonly: boolean = false;

  @Input() isPass: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  icons = {
    close: faTrash,
  };

  get emailErrors() {
    return this.formField?.errors?.['email'] && !this.formField?.pristine;
  }
  get minErros() {
    return this.formField?.errors?.['min'] && !this.formField?.pristine;
  }
  get requiredErrors() {
    return this.formField?.errors?.['required'] && !this.formField?.pristine;
  }

  public options;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  value: any;

  onPrepend() {
    if (!this.isPass) {
      return;
    }
    this.type == 'text' ? (this.type = 'password') : (this.type = 'text');
  }

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

  activate(value: any) {
    this.value = value;
    this.valueChange.emit(this.value);
    this.writeValue(this.value);
  }
}
