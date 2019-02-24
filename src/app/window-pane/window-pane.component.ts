import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ScrollService } from 'app/scroll.service';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-window-pane',
  templateUrl: './window-pane.component.html',
  styleUrls: ['./window-pane.component.scss'],
  animations: [
    trigger('one', [
      state('initial', style({transform: 'translateY(50%) translateX(400%) scale(1.5)'})),
      state('final', style({transform: 'translateX(-35%) translateY(-20%) rotate(5deg) scale(1)'})),
      transition('initial=>final', animate('500ms 300ms ease-in'))
    ]),
    trigger('two', [
      state('initial', style({transform: 'translateY(25%) translateX(400%) scale(1.5)'})),
      state('final', style({transform: 'translateX(35%) translateY(20%) rotate(-5deg) scale(1)'})),
      transition('initial=>final', animate('500ms 500ms ease-in'))
    ]),
    trigger('textbox', [
      state('initial', style({
        transform: 'translateX(-40%)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateX(0%)',
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

  constructor(private scrollService: ScrollService) { }

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
    this.scrollService.dataChange
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
