import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { FrontRainDirective } from './front-rain.directive';
import { BackRainDirective } from './back-rain.directive';
import { RaindropItem } from '../raindrop/raindrop.item';
import { RaindropComponent } from '../raindrop/raindrop.component';

@Component({
  selector: 'app-rainy-day',
  templateUrl: './rainy-day.component.html',
  styleUrls: ['./rainy-day.component.scss']
})
export class RainyDayComponent implements OnInit {
  @Input() frontRaindrops: RaindropItem[];
  @Input() backRaindrops: RaindropItem[];
  @ViewChild(FrontRainDirective) frontRain: FrontRainDirective;
  @ViewChild(BackRainDirective) backRain: BackRainDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.makeItRain(this.frontRaindrops, this.frontRain);
    this.makeItRain(this.backRaindrops, this.backRain);
  }

  makeItRain(collection: RaindropItem[], directive: FrontRainDirective | BackRainDirective) {
    collection.map((v) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(v.component);

      const viewContainerRef = directive.viewContainerRef;
      // viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as RaindropComponent).dropStyle = v.dropStyle;
      (componentRef.instance as RaindropComponent).stemStyle = v.stemStyle;
    });
  }
}
