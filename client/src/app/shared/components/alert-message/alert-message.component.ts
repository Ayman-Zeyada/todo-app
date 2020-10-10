import { Component, EventEmitter, Input, Output } from '@angular/core';

import { StateType } from '../../enumes/state-type.enum';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {

  @Output() closeAlert = new EventEmitter();
  @Input() type: StateType;
  @Input() message: string;

  onClickClose(): void {
    this.closeAlert.emit();
  }
}
