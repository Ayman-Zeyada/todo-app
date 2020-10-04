import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { ModalComponent } from './modal/modal.component';
import { DayHeaderComponent } from './day-header/day-header.component';
import { DayHeaderPipe } from './pipes/day-header.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    ModalComponent,
    DayHeaderComponent,
    DayHeaderPipe,
    AutoFocusDirective,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    ModalComponent,
    DayHeaderComponent,
    AutoFocusDirective,
    TranslateModule,
    TranslatePipe
  ],
})
export class SharedModule {}
