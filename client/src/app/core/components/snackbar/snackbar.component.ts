import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Subscription } from 'rxjs';

import { StateType } from '../../../shared/enumes/state-type.enum';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('state', [
      transition(':enter', [
        style({
          bottom: '-100px',
          transform: 'translate(-50%, 0%) scale(0.3)',
        }),
        animate(
          '150ms cubic-bezier(0.4, 0.2, 0.8, 1)',
          style({
            transform: 'translate(-50%, 0%) scale(1)',
            opacity: 1,
            bottom: '20px',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({
            transform: 'translate(-50%, 0%) scale(0.3)',
            opacity: 0,
            bottom: '-100px',
          })
        ),
      ]),
    ]),
  ],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  show = false;
  private message = 'This is snackbar';
  private type = StateType.SUCCESS;
  private snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(
      (state) => {
        if (state.type) {
          this.type = state.type;
        } else {
          this.type = StateType.SUCCESS;
        }
        this.message = state.message;
        this.show = state.show;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    );
  }

  ngOnDestroy(): void {
    this.snackbarSubscription.unsubscribe();
  }
}
