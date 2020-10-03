import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
