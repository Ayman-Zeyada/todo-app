import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean;
  private parentEl: HTMLElement;
  constructor(
    private spinnerService: SpinnerService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.spinnerService.setSpinner(this);
  }

  show(parentEl: HTMLElement): void {
    this.parentEl = parentEl;
    this.renderer.addClass(parentEl, 'relative');
    this.renderer.appendChild(parentEl, this.el.nativeElement);
    this.showSpinner = true;
  }

  hide(): void {
    this.renderer.removeClass(this.parentEl, 'relative');
    this.renderer.removeChild(this.parentEl, this.el.nativeElement);
    this.showSpinner = false;
  }
}
