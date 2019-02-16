import { Component, OnInit } from '@angular/core';

import { RainyDayService } from './rainy-day/rainy-day.service';
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

  constructor(private RainyDayService: RainyDayService) {}

  ngOnInit() {
    this.frontRaindrops = this.RainyDayService.getRaindrops('left');
    this.backRaindrops = this.RainyDayService.getRaindrops('right');
  }
}
