import {  Component,
          OnInit,
          HostListener,
          Inject,
          Directive,
          Input,
          QueryList,
          ViewChildren,
          ElementRef } from '@angular/core';

import { WINDOW } from "helpers/windowRef";

import { RainyDayService } from './rainy-day/rainy-day.service';
import { ScrollService } from 'app/scroll.service';
import { RaindropItem } from './raindrop/raindrop.item';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id: string;
  nativeElement: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  frontRaindrops: RaindropItem[];
  backRaindrops: RaindropItem[];
  @ViewChildren(Pane, {read: ElementRef}) panes: QueryList<Pane>;

  constructor(
    private RainyDayService: RainyDayService,
    private scrollService: ScrollService,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.frontRaindrops = this.RainyDayService.getRaindrops('left');
    this.backRaindrops = this.RainyDayService.getRaindrops('right');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollService.getActivePane(this.panes);
  }
}
