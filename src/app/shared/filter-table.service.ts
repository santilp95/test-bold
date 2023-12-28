import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CheckboxStatus } from '../molecules/filter-toggle/filter-toggle.component';

@Injectable({
  providedIn: 'root'
})
export class FilterTableService {
  private filterSource = new BehaviorSubject<CheckboxStatus>({
    datafono: false,
    linkDePago: false,
    verTodos: true
  });
  currentFilter$ = this.filterSource.asObservable();
  constructor() { }
  changeFilter(filter: CheckboxStatus) {
    this.filterSource.next(filter);
  }
}
