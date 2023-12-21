import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private titleSource = new BehaviorSubject<string>('Septiembre');
  title$ = this.titleSource.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title);
  }
}
