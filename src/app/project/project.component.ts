import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyIn', [
      state('initial', style({
        transform: 'translateX(100%)',
        // opacity: 0
      })),
      state('final', style({
        transform: 'translateX(0%)',
        // opacity: 1
      })),
      transition('initial=>final', animate('0.5s ease-in'))
    ])
  ]
})
export class ProjectComponent implements OnInit {
  @Input() img: string;
  @Input() url: string;
  @Input() name: string;
  @Input() stack: string;
  @Input() description: string;
  @Input() delay = 0;
  @Input() state: string;

  constructor() { }

  ngOnInit() {
  }

}
