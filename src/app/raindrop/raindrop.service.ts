import { Injectable } from '@angular/core';
import { RaindropItem } from './raindrop.item';
import { RaindropComponent } from './raindrop.component';

@Injectable()
export class RaindropService {
  getRaindrops(side: string) {
    console.log('getRaindrops', side)
    let result: array<RaindropItem> = [];
    let increment: number = Math.floor(Math.random() * 2 + 1);
    let dropStyle: object = {};
    let stemStyle: object = {};

    while (increment < 100) {
      // random number between 1 and 99
      let rand100 = Math.floor(Math.random() * 99 + 1);

      console.log('rand100', rand100);
      // random number between 1 and 3
      let rand5 = Math.floor(Math.random() * 3 + 1);
      console.log('rand5', rand5);

      dropStyle = {
        [side]: increment + '%',
        'bottom': (rand5 + rand5 - 1 + 100) + '%',
        'animation-delay': '0.' + rand100 + 's',
        'animation-duration': '0.5' + rand100 + 's'
      };

      stemStyle = {
        'animation-delay': '0.' + rand100 + 's',
        'animation-duration': '0.5' + rand100 + 's'
      };

      // increment
      increment += rand5;

      result.push(new RaindropItem(RaindropComponent, dropStyle, stemStyle));
    }

    return result;
  }
}
