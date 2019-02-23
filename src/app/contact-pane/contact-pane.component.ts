import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { WINDOW } from 'helpers/windowRef';

declare var require: any;
declare var particlesJS: any;
@Component({
  selector: 'app-contact-pane',
  templateUrl: './contact-pane.component.html',
  styleUrls: ['./contact-pane.component.scss'],
  animations: [
    trigger('arrow', [
      transition(':enter', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('500ms .6s ease-in', style({
          transform: 'translateY(0%)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({
          transform: 'scale(0.5)',
          opacity: 0
        }),
        animate('490ms 10ms ease-in', style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInDown', [
      transition(':enter', [
        style({
          transform: 'translateY(-50%) scale(0.5)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateY(0) scale(1)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({
          transform: 'translateY(50%) scale(0.5)',
          opacity: 0
        }),
        animate('480ms 20ms ease-in', style({
          transform: 'translateY(0) scale(1)',
          opacity: 1
        }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class ContactPaneComponent implements OnInit {
  showContent: boolean;
  showParticles: boolean = false;

  constructor(
    private scrollService: ScrollService,
    @Inject(WINDOW) private window: Window
  ) {
    this.scrollService.dataChange.subscribe((data) => {
      this.showContent = data.showContent.pane5;
    });

    if (window.innerWidth > 600) {
      this.showParticles = true;
    }
  }

  ngOnInit() {
    if (this.showParticles) {
      require('particles.js');
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles', 'assets/particles.json', () => {
        // console.log('callback - particles.js config loaded');
      });
    }
  }

}
