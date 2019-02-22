import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, style, animate, transition } from '@angular/animations';

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
        animate('500ms .5s ease-in', style({
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
        animate('500ms 75ms ease-in', style({
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
        animate('500ms 25ms ease-in', style({
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
        animate('500ms 125ms ease-in', style({
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

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((data) => {
      this.showContent = data.showContent.pane5;
    });
  }

  ngOnInit() {
    require('particles.js');
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }

}
