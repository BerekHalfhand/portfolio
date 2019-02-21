import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group, keyframes } from '@angular/animations';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  animations: [
    trigger('widen', [
      transition(':enter', [
        style({width: 0}),
          animate("0.5s {{delay}}ms ease-in", style({width: "{{percentage}}%"}))
      ], {params : { percentage: "50", delay: 0 }})
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
