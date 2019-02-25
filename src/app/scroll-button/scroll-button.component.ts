import { Component, OnInit, Input } from '@angular/core';
import { ViewportService } from 'app/viewport.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class ScrollButtonComponent implements OnInit {
  @Input() targetPane: string;
  @Input() isArrow = false;
  activePane = 'pane1';

  constructor(public viewportService: ViewportService) {
    this.viewportService.dataChange.subscribe((data) => {
      this.activePane = data.activePane;
    });
  }

  ngOnInit() {
  }

  isVisible() {
    let activePane = this.activePane.replace(/[^0-9.]/g, '');
    let targetPane = this.targetPane.replace(/[^0-9.]/g, '');

    if (parseInt(activePane) === parseInt(targetPane) - 1)
      return true;

    return false;
  }

}
