import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private titleSource = new BehaviorSubject<string | null>(
    typeof window !== 'undefined' && window.localStorage
      ? localStorage.getItem('selectedButton')
      : null
  );
  title$ = this.titleSource.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title);
    localStorage.setItem('selectedButton', title);
  }

  getSelectedButton() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedButton = localStorage.getItem('selectedButton');
      return of(storedButton ? storedButton : null);
    }
    return of(null);
  }
}
