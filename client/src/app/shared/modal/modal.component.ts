import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() size: string;
  @Input() type: string;
  @Input() dismissable: boolean;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
    this.dismissable = true;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    const modal = this.element.querySelector('.modal');
    this.renderer.appendChild(document.body, this.element);

    if (this.size) {
      this.renderer.addClass(modal, `modal--${this.size}`);
    }

    if (this.type) {
      this.renderer.addClass(modal, `modal--${this.type}`);
    }

    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'app-modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    this.renderer.addClass(document.body, 'body__modal--open');
  }

  close(): void {
    this.element.style.display = 'none';
    this.renderer.removeClass(document.body, 'body__modal--open');
  }

  onClickModalBackground(): void {
    if (this.dismissable) {
      this.close();
    }
  }

  onClickModalBody(event: Event): void {
    event.stopPropagation();
  }
}
