import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ScrollService } from 'app/scroll.service';
// import { TextAnimation } from 'ngx-teximate';
// import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-window-pane',
  templateUrl: './window-pane.component.html',
  styleUrls: ['./window-pane.component.scss'],
  animations: [
    trigger('one', [
      transition(':enter', [
        style({transform: 'translateY(50%) translateX(400%) scale(1.5)'}),
        animate('500ms 300ms ease-in', style({transform: 'translateX(-60%) translateY(-25%) rotate(5deg) scale(1)'}))
      ])
    ]),
    trigger('two', [
      transition(':enter', [
        style({transform: 'translateY(25%) translateX(400%) scale(1.5)'}),
        animate('500ms 500ms ease-in', style({transform: 'translateX(20%) translateY(5%) rotate(-5deg) scale(1)'}))
      ])
    ]),
    trigger('textbox', [
      transition(':enter', [
        style({
          transform: 'translateX(-40%)',
          opacity: 0
        }),
        animate('300ms ease-in', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class WindowPaneComponent implements OnInit {
  showContent: boolean;

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((data) => {
      this.showContent = data.showContent.pane2;
    });
  }

  ngOnInit() {
  }

}
