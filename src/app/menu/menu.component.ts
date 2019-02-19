import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'app/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activePane: string = 'pane1';

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((activePane) => {
      this.activePane = activePane;
    });
  }

  ngOnInit() {
  }

}
