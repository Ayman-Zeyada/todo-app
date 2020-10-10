import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { StateType } from '../../../shared/enumes/state-type.enum';

export interface SnackbarState {
  show: boolean;
  message: string;
  type: StateType;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new Subject<SnackbarState>();
  public snackbarState = this.snackbarSubject.asObservable();

  show(message: string, type?: StateType): void {
    this.snackbarSubject.next({
      show: true,
      message,
      type,
    });
  }
}
