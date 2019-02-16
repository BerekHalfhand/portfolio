import { Type } from '@angular/core';

export class RaindropItem {
  constructor(public component: Type<any>,
              public dropStyle: any,
              public stemStyle: any) {}
}
