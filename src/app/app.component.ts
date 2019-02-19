import {  Component,
          OnInit,
          // AfterViewInit,
          HostListener,
          Inject,
          Directive,
          Input,
          QueryList,
          // ViewChild,
          ViewChildren,
          ElementRef } from '@angular/core';

import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "helpers/windowRef";

import { RainyDayService } from './rainy-day/rainy-day.service';
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
  // @ViewChild("pane1", {read: ElementRef}) pane1: ElementRef;

  @ViewChildren(Pane, {read: ElementRef}) panes: QueryList<Pane>;
  activePane: string = 'pane1';

  constructor(
    private RainyDayService: RainyDayService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.frontRaindrops = this.RainyDayService.getRaindrops('left');
    this.backRaindrops = this.RainyDayService.getRaindrops('right');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.getActivePane();
  }

  // ngAfterViewInit(): void {
  //   // this.getActivePane();
  // }

  getActivePane() {
    let scrollPosition = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    this.panes.map(p => {
      if (p && p.nativeElement) {
        let position = p.nativeElement.offsetTop;
        let middle = p.nativeElement.offsetHeight / 2;
        if (scrollPosition > position - middle) this.activePane = p.nativeElement.id;
      }
    });
  }
}
