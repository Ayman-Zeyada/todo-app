import { Injectable } from '@angular/core';

import { SpinnerComponent } from './spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinner: SpinnerComponent;
  constructor() { }

  setSpinner(spinner: SpinnerComponent): void {
    this.spinner = spinner;
  }

  show(parentEl: HTMLElement): void {
    this.spinner.show(parentEl);
  }

  hide(): void {
    this.spinner.hide();
  }
}
