import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { DayHeaderComponent } from './day-header/day-header.component';
import { DayHeaderPipe } from './pipes/day-header.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [ModalComponent, DayHeaderComponent, DayHeaderPipe, AutoFocusDirective],
  imports: [CommonModule],
  exports: [ModalComponent, DayHeaderComponent, AutoFocusDirective],
})
export class SharedModule {}
