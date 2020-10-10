import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { ModalComponent } from './components/modal/modal.component';
import { DayHeaderComponent } from './components/day-header/day-header.component';
import { DayHeaderPipe } from './pipes/day-header.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';

@NgModule({
  declarations: [
    ModalComponent,
    DayHeaderComponent,
    DayHeaderPipe,
    ClickOutsideDirective,
    AlertMessageComponent
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    ModalComponent,
    DayHeaderComponent,
    TranslateModule,
    TranslatePipe,
    ClickOutsideDirective,
    AlertMessageComponent
  ],
})
export class SharedModule {}
