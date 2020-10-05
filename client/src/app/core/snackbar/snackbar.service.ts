import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarType } from '../../shared/enumes/snackbar-type.enum';

export interface SnackbarState {
  show: boolean;
  message: string;
  type: SnackbarType;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new Subject<SnackbarState>();
  public snackbarState = this.snackbarSubject.asObservable();

  show(message: string, type?: SnackbarType): void {
    this.snackbarSubject.next({
      show: true,
      message,
      type,
    });
  }
}
