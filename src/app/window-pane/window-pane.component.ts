import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ViewportService } from 'app/viewport.service';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-window-pane',
  templateUrl: './window-pane.component.html',
  styleUrls: ['./window-pane.component.scss'],
  animations: [
    trigger('one', [
      state('initial', style({
        transform: 'translate3d(400%, 50%, 0) scale(1.5)'
      })),
      state('final', style({
        transform: 'translate3d(-35%, -20%, 0) rotate(5deg) scale(1)'
      })),
      transition('initial=>final', animate('500ms 300ms ease-in'))
    ]),
    trigger('two', [
      state('initial', style({
        transform: 'translate3d(400%, 25%, 0) scale(1.5)'
      })),
      state('final', style({
        transform: 'translate3d(35%, 20%, 0) rotate(-5deg) scale(1)'
      })),
      transition('initial=>final', animate('500ms 500ms ease-in'))
    ]),
    trigger('textbox', [
      state('initial', style({
        transform: 'translate3d(-40%, 0, 0)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      })),
      transition('initial=>final', animate('300ms ease-in'))
    ])
  ]
})
export class WindowPaneComponent implements OnInit, OnDestroy {
  showContent = false;
  state = 'initial';
  private ngUnsubscribe = new Subject();

  constructor(private viewportService: ViewportService) { }

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleShow() {
    this.showContent = true;
    this.state = 'final';
    this.unsubscribe();
  }

  ngOnInit() {
    this.viewportService.dataChange
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      if (data.showContent.pane2 === true) {
        this.toggleShow();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
