import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[front-rain]',
})

export class FrontRainDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
