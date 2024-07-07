import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]',
  standalone: true
})
export class RedElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="yellow"
  }

}
