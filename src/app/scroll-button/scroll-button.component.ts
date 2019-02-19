import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'app/scroll.service';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  @Input() targetPane: string;
  activePane: string = 'pane1';

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((activePane) => {
      this.activePane = activePane;
    });
  }

  ngOnInit() {
  }

}
