import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyIn', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate('0.5s {{delay}}ms ease-in', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ], {params : { delay: 0 }})
    ])
  ]
})
export class ProjectComponent implements OnInit {
  @Input() img: string;
  @Input() url: string;
  @Input() name: string;
  @Input() stack: string;
  @Input() description: string;
  @Input() delay: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
