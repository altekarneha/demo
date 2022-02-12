import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color='red';
    this.el.nativeElement.style.backgroundColor = 'yellow';
   }

}
