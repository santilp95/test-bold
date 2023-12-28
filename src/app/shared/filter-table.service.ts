import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CheckboxStatus } from '../molecules/filter-toggle/filter-toggle.component';

@Injectable({
  providedIn: 'root',
})
export class FilterTableService {
  private initialValues: CheckboxStatus = {
    datafono: false,
    linkDePago: false,
    verTodos: false,
  };
  private filterSource = new BehaviorSubject<CheckboxStatus>(
    this.initialValues
  );
  currentFilter$ = this.filterSource.asObservable();
  constructor() {}
  changeFilter(filter: CheckboxStatus) {
    this.filterSource.next(filter);
  }

  getInitialFilter(): CheckboxStatus {
    const storedFilter =
      typeof window !== 'undefined' && window.localStorage
        ? localStorage.getItem('filter')
        : null;
    return storedFilter ? JSON.parse(storedFilter) : this.initialValues;
  }
}
