import { Injectable, Inject, QueryList } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { share } from 'rxjs/operators';
import { Pane } from './app.component';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from 'helpers/windowRef';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  dataChange: Observable<any>;
  dataChangeObserver: any;
  activePane = 'pane1';
  showContent: boolean[] = [];
  viewport = {
    width: 0 as number,
    height: 0 as number
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    this.viewport.width = window.innerWidth;
    this.viewport.height = window.innerHeight;

    this.dataChange = new Observable((observer: Observer<any>) => {
      this.dataChangeObserver = observer;
    }).pipe(share());
  }

  handleResize() {
    let vh = this.viewport.height * 0.01;
    console.log(vh);
    this.document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  getActivePane(panes) {
    let scrollPosition = this.window.pageYOffset
                      || this.document.documentElement.scrollTop
                      || this.document.body.scrollTop
                      || 0;

    // TODO: sync offset w/ sass variable

    let offset = this.viewport.width * 0.08; //8vw

    panes.map(p => {
      if (p && p.nativeElement) {
        let position = p.nativeElement.offsetTop;
        let middle = p.nativeElement.offsetHeight / 2;

        if (scrollPosition > position - middle + offset)
          this.activePane = p.nativeElement.id;

        this.showContent[this.activePane] = true;
      }
    });
    this.dataChangeObserver.next({
      activePane: this.activePane,
      showContent: this.showContent
    });
  }

  scrollToElement(e, selector): void {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element)
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
