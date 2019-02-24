import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { trigger, style, state, animate, transition, group, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // trigger('widen', [
    //   state('initial', style({transform: 'translateX(-100%)'})),
    //   state('final', style({transform: 'translateX(0)'})),
    //   transition('initial=>final', animate('0.5s {{delay}}ms ease-in'))
    // ]),
    trigger('flyIn', [
      state('initial', style({transform: 'translateX(-150%)'})),
      state('final', style({transform: 'translateX(0%)'})),
      transition('initial=>final',
        // group([
          animate('0.25s {{delay}}ms ease-in'),
          // query('@widen', [
            // animateChild()
          // ])
        // ]),
        {params : { delay: 0 }}
      )
    ])
  ]
})
export class SkillBarComponent implements OnInit {
  @Input() skill: string;
  @Input() parentState: string;
  @Input() percentage = 0;
  @Input() delay = 0;

  constructor() { }

  ngOnInit() {
  }

}
