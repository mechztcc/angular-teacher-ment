import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox.component';
import { BadgeModule } from '../badge/badge.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [
    CommonModule,
    BadgeModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ComboboxComponent],
})
export class ComboboxModule {}
