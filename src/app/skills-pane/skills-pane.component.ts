import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-skills-pane',
  templateUrl: './skills-pane.component.html',
  styleUrls: ['./skills-pane.component.scss'],
  animations: [
    trigger('widen', [
      transition(':enter', [
        style({width: 0}),
        animate('500ms ease-in', style({width: '100%'}))
      ])
      // transition(':leave', [
      //   animate('200ms ease-in', style({transform: 'translateY(-30%)'}))
      // ])
    ])
  ]
})
export class SkillsPaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
