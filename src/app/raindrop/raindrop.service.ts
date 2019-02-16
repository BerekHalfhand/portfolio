import { Injectable } from '@angular/core';
import { RaindropItem } from './raindrop.item';
import { RaindropComponent } from './raindrop.component';
import { WindowRef } from 'helpers/windowRef';



@Injectable()
export class RaindropService {
  viewport: WindowRef;

  constructor(private winRef: WindowRef) {
      // getting the native window obj
      this.viewport = winRef.nativeWindow;
      // console.log('Native window obj', this.viewport);
  }
  getRaindrops(side: string) {
    // console.log('getRaindrops', side)
    let result: RaindropItem[] = [];
    let increment: number = Math.floor(Math.random() * 2 + 1);
    let dropStyle: object = {};
    let stemStyle: object = {};

    while (increment < this.viewport.innerWidth / 10) {
      // random number between 1 and 99
      let rand99 = Math.floor(Math.random() * 99 + 1);

      // console.log('rand99', rand99);
      // random number between 1 and 3
      let rand3 = Math.floor(Math.random() * 3 + 1);
      // console.log('rand3', rand3);

      dropStyle = {
        [side]: increment + '%',
        'bottom': (rand3 - 1 + 100) + '%',
        'animation-delay': '0.' + rand99 + 's',
        'animation-duration': '0.5' + rand99 + 's'
      };

      stemStyle = {
        'animation-delay': '0.' + rand99 + 's',
        'animation-duration': '0.5' + rand99 + 's'
      };

      // increment
      increment += rand3;

      result.push(new RaindropItem(RaindropComponent, dropStyle, stemStyle));
    }

    return result;
  }
}
