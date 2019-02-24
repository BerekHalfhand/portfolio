import { Component, OnInit, Input, Inject } from '@angular/core';
import { ViewportService } from 'app/viewport.service';

enum Resolution {
  Xs = 'xs/',
  Sm = 'sm/',
  Md = 'md/',
  Lg = 'lg/',
  Xl = 'xl/',
  Xxl = 'xxl/',
  Max = ''
}

// TODO: sync w/ SCSS vars
enum Breakpoint {
  Xs = 320,
  Sm = 600,
  Md = 992,
  Lg = 1200,
  Xl = 1900,
  Xxl = 2560,
  Max = 3200
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() path: string;
  @Input() alt = '';

  //in fullscreen mode holds image proportion (width * fullscreen = height)
  @Input() fullscreen = 0;

  viewport = {
    width: 0 as number,
    height: 0 as number
  };

  Breakpoint: typeof Breakpoint = Breakpoint;
  Resolution: typeof Resolution = Resolution;
  size: string;

  constructor(private viewportService: ViewportService) {
    this.viewport = viewportService.viewport;
  }

  getFittingImage(path: string, proportion: number) {
    for (let item in Breakpoint) {
      if (isNaN(Number(item))) {
        let minWidth = parseInt(Breakpoint[item]);
        let minHeight = minWidth * proportion;
        // console.log(minWidth, minHeight);

        if ( this.viewport.width < minWidth
          && this.viewport.height < minHeight ) {
            this.size = Resolution[item];
            // console.log(`Chosen size: ${this.size}, ${minWidth}x${minHeight}`);

            return path.replace(/pics\//gi, `pics/${this.size}`);
          }
      }
    }

    return path;
  }

  ngOnInit() {
    if (this.fullscreen) {
      this.path = this.getFittingImage(this.path, this.fullscreen);
      console.log(`Chosen size: ${this.path}`);
    }
  }

}
