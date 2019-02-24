import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { WINDOW } from 'helpers/windowRef';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

declare var require: any;
declare var particlesJS: any;
@Component({
  selector: 'app-contact-pane',
  templateUrl: './contact-pane.component.html',
  styleUrls: ['./contact-pane.component.scss'],
  animations: [
    trigger('arrow', [
      state('initial', style({
        transform: 'translateY(50%)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateY(0%)',
        opacity: 1
      })),
      transition('initial=>final', animate('500ms .6s ease-in'))
    ]),
    trigger('fadeIn', [
      state('initial', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      state('final', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('initial=>final', animate('490ms 10ms ease-in'))
    ]),
    trigger('fadeInDown', [
      state('initial', style({
        transform: 'translateY(-50%) scale(0.5)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateY(0) scale(1)',
        opacity: 1
      })),
      transition('initial=>final', animate('500ms ease-in'))
    ]),
    trigger('fadeInUp', [
      state('initial', style({
        transform: 'translateY(50%) scale(0.5)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateY(0) scale(1)',
        opacity: 1
      })),
      transition('initial=>final', animate('480ms ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class ContactPaneComponent implements OnInit, OnDestroy {
  showContent = false;
  showParticles = false;
  state = 'initial';
  private ngUnsubscribe = new Subject();

  constructor(
    private scrollService: ScrollService,
    @Inject(WINDOW) private window: Window
  ) {
    if (window.innerWidth > 600) {
      this.showParticles = true;
    }
  }

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
    if (this.showParticles) {
      require('particles.js');
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles', 'assets/particles.json', () => {
        // console.log('callback - particles.js config loaded');
      });
    }

    this.scrollService.dataChange
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      if (data.showContent.pane5 === true) {
        this.toggleShow();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
