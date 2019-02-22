import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { trigger, style, animate, transition, group, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('widen', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
          animate('0.75s {{delay}}ms ease-in', style({transform: 'translateX(0)'}))
      ], {params : { delay: 0 }})
    ]),
    trigger('flyIn', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        group([
          animate('0.5s {{delay}}ms ease-in', style({
            transform: 'translateX(0%)',
            opacity: 1
          })),
          query('@widen', [
            animateChild()
          ])
        ])
      ], {params : { delay: 0 }})
    ])
  ]
})
export class SkillBarComponent implements OnInit {
  @Input() skill: string;
  @Input() percentage: number = 0;
  @Input() delay: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
