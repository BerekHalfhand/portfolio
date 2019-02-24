import { Inject } from '@angular/core';
import { RaindropItem } from '../raindrop/raindrop.item';
import { RaindropComponent } from '../raindrop/raindrop.component';
import { ViewportService } from 'app/viewport.service';

export class RainyDayService {

  constructor(@Inject(ViewportService) private viewportService: ViewportService) { }

  getRaindrops(side: string) {
    // console.log('getRaindrops', side)
    let result: RaindropItem[] = [];
    let increment: number = Math.floor(Math.random() * 2 + 1);
    let dropStyle: object = {};
    let stemStyle: object = {};

    while (increment < this.viewportService.viewport.width / 15) {
      // random number between 1 and 100
      let rand100 = Math.floor(Math.random() * 100 + 1);

      // console.log('rand100', rand100);
      // random number between 1 and 3
      let rand3 = Math.floor(Math.random() * 3 + 1);
      // console.log(side, increment / (this.viewport.innerWidth / 1000) + '%');

      dropStyle = {
        [side]: (increment / (this.viewportService.viewport.width / 1000)) - 1 + '%',
        'bottom': (rand3 - 1 + 100) + '%',
        'animation-delay': '0.' + rand100 + 's',
        'animation-duration': '0.5' + rand100 + 's'
      };

      stemStyle = {
        'animation-delay': '0.' + rand100 + 's',
        'animation-duration': '0.5' + rand100 + 's'
      };

      // increment
      increment += rand3;

      result.push(new RaindropItem(RaindropComponent, dropStyle, stemStyle));
    }

    return result;
  }
}
