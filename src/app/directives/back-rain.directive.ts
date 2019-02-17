import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[back-rain]',
})

export class BackRainDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
