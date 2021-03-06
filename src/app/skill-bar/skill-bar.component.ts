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
    trigger('flyIn', [
      state('initial', style({transform: 'translate3d(-150%, 0, 0)'})),
      state('final', style({transform: 'translate3d(0, 0, 0)'})),
      transition('initial=>final', animate('0.3s ease-in'))
    ])
  ]
})
export class SkillBarComponent implements OnInit {
  @Input() skill: string;
  @Input() state: string;
  @Input() percentage = 0;
  @Input() willChange = true;

  constructor() { }

  ngOnInit() {
  }

}
