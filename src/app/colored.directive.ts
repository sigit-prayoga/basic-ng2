import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colored]'
})
export class ColoredDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}

