import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
})
export class ComboboxComponent implements OnInit {
  @Input() label: string = 'Search';
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  icons = {
    close: faClose,
    glass: faMagnifyingGlass
  };

  options = [
    'Matemática',
    'História',
    'Matemática',
    'História',
    'Matemática',
    'História',
  ];

  filtered: any[] = [];
  selecteds = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      search: [''],
    });
  }

  filter() {
    const search = this.form.controls['search'].value;
    this.filtered = this.options.filter((opt) => {
      return opt.toLowerCase().includes(search.toLowerCase());
    });
  }

  onSelect(index: number) {
    this.selecteds.push(this.filtered[index]);
    this.form.reset();

    this.emitter.emit(this.selecteds);
  }

  onRemove(index: number) {
    this.selecteds.splice(index, 1);
  }

  onLeave() {
    this.form.reset();
    this.filtered = [];
  }
}
