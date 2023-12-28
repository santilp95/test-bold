import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CustomCheckboxComponent, SubmitButtonComponent } from '../../atoms';
import { CheckboxState } from '../../atoms/custom-checkbox/custom-checkbox.component';
import { FilterTableService } from '../../shared';

export interface CheckboxStatus {
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
export class FilterToggleComponent implements OnInit {
  showFilter: boolean = false;
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filterTableService: FilterTableService,
  ) {
    this.filterForm = this.fb.group<CheckboxStatus>({
      datafono: false,
      linkDePago: false,
      verTodos: false,
    });
  }

  ngOnInit() {
    const storedFilter = typeof window !== 'undefined' && window.localStorage
      ?localStorage.getItem('filter')
      :null;
    if (storedFilter) {
      this.filterForm.setValue(JSON.parse(storedFilter));
      this.filterTableService.changeFilter(this.filterForm.value);
    }
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onCheckboxChange(filter: CheckboxState) {
    Object.keys(this.filterForm.controls).forEach(key => {
      this.filterForm.controls[key].setValue(false);
    });
    if (filter.isChecked) {
      this.filterForm.controls[filter.name].setValue(true);
    }
  }

  onSubmit() {
    localStorage.setItem('filter', JSON.stringify(this.filterForm.value));
    this.filterTableService.changeFilter(this.filterForm.value);
    this.showFilter = false;
  }
}
