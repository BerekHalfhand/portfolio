import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { ViewportService } from 'app/viewport.service';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

declare var particlesJS: any;
@Component({
  selector: 'app-contact-pane',
  templateUrl: './contact-pane.component.html',
  styleUrls: ['./contact-pane.component.scss'],
  animations: [
    trigger('arrow', [
      state('initial', style({
        transform: 'translate3d(0, 50%, 0)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      })),
      transition('initial=>final', animate('500ms .6s ease-in'))
    ]),
    trigger('fadeIn', [
      state('initial', style({
        transform: 'scale(0.5) translateZ(0)',
        opacity: 0
      })),
      state('final', style({
        transform: 'scale(1) translateZ(0)',
        opacity: 1
      })),
      transition('initial=>final', animate('490ms 10ms ease-in'))
    ]),
    trigger('fadeInDown', [
      state('initial', style({
        transform: 'translate3d(0, -50%, 0) scale(0.5)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1
      })),
      transition('initial=>final', animate('500ms ease-in'))
    ]),
    trigger('fadeInUp', [
      state('initial', style({
        transform: 'translate3d(0, 50%, 0) scale(0.5)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translate3d(0, 0, 0) scale(1)',
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

  constructor(private viewportService: ViewportService) {
    if (this.viewportService.viewport.width > 600) {
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
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles', 'assets/particles.json', () => {
        // console.log('callback - particles.js config loaded');
      });
    }

    this.viewportService.dataChange
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
