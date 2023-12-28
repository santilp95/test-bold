import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private initialValues: string = 'Septiembre';

  private titleSource = new BehaviorSubject<string>(this.initialValues);
  title$ = this.titleSource.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title);
    localStorage.setItem('selectedButton', title);
  }

  getSelectedButton(): string {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('selectedButton') || this.initialValues;
    }
    return this.initialValues;
  }
}
