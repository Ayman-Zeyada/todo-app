import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { ModalComponent } from './modal/modal.component';
import { DayHeaderComponent } from './day-header/day-header.component';
import { DayHeaderPipe } from './pipes/day-header.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    ModalComponent,
    DayHeaderComponent,
    DayHeaderPipe,
    ClickOutsideDirective,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    ModalComponent,
    DayHeaderComponent,
    TranslateModule,
    TranslatePipe,
    ClickOutsideDirective
  ],
})
export class SharedModule {}
