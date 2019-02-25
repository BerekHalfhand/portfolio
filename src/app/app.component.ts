import {  Component,
          OnInit,
          HostListener,
          Inject,
          Directive,
          Input,
          QueryList,
          ViewChildren,
          ElementRef,
          ChangeDetectionStrategy,
          ChangeDetectorRef } from '@angular/core';
import { RainyDayService } from './rainy-day/rainy-day.service';
import { ViewportService } from 'app/viewport.service';
import { RaindropItem } from './raindrop/raindrop.item';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id: string;
  nativeElement: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  frontRaindrops: RaindropItem[];
  backRaindrops: RaindropItem[];

  @ViewChildren(Pane, {read: ElementRef}) panes: QueryList<Pane>;

  constructor(
    private rainyDayService: RainyDayService,
    private viewportService: ViewportService
  ) {}

  ngOnInit() {
    this.frontRaindrops = this.rainyDayService.getRaindrops('left');
    this.backRaindrops = this.rainyDayService.getRaindrops('right');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.viewportService.throttledScroll(this.panes);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.viewportService.debouncedResize();
  }
}
