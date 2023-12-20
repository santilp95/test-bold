import { Component } from '@angular/core';

import { CustomCheckboxComponent, SubmitButtonComponent } from '../../atoms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-toggle',
  standalone: true,
  imports: [CustomCheckboxComponent,SubmitButtonComponent,CommonModule],
  templateUrl: './filter-toggle.component.html',
  styleUrl: './filter-toggle.component.css'
})
export class FilterToggleComponent {
  showFilter: boolean = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilters() {
    // Handle the application of filters here
    // After applying filters, you might want to close the filter options
    this.showFilter = false;
  }
}
