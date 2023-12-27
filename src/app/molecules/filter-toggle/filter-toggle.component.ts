import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CustomCheckboxComponent, SubmitButtonComponent } from '../../atoms';

interface CheckboxStatus {
  datafono: boolean;
  linkDePago: boolean;
  verTodos: boolean;
}

@Component({
  selector: 'app-filter-toggle',
  standalone: true,
  imports: [
    CustomCheckboxComponent,
    SubmitButtonComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './filter-toggle.component.html',
  styleUrl: './filter-toggle.component.css'
})
export class FilterToggleComponent {
  showFilter: boolean = false;
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group<CheckboxStatus>({
      datafono: false,
      linkDePago: false,
      verTodos: false,
    });
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onCheckboxChange(filter: { value: string, isChecked: boolean }) {
    console.log('Filter:', filter);
    Object.keys(this.filterForm.controls).forEach(key => {
      this.filterForm.controls[key].setValue(false);
    });
    if (filter.isChecked) {
      this.filterForm.controls[filter.value].setValue(true);
    }
  }

  onSubmit() {
    console.log('Form value:', this.filterForm.value);
    this.showFilter = false;
  }
}
