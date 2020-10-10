import { Injectable } from '@angular/core';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: ModalComponent[] = [];

  add(modal: ModalComponent): void {
    this.modals.push(modal);
  }

  remove(id: string): void {
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string): void {
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }

  close(id: string): void {
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}
