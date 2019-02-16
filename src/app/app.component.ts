import { Component, OnInit } from '@angular/core';

import { RaindropService } from './raindrop/raindrop.service';
import { RaindropItem } from './raindrop/raindrop.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  frontRaindrops: RaindropItem[];
  backRaindrops: RaindropItem[];
  title: string = 'portfolio';

  constructor(private raindropService: RaindropService) {}

  ngOnInit() {
    this.frontRaindrops = this.raindropService.getRaindrops('left');
    this.backRaindrops = this.raindropService.getRaindrops('right');
    console.dir(this.frontRaindrops);
    console.dir(this.backRaindrops);
  }
}
