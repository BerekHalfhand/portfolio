import { Component, OnInit, Input } from '@angular/core';
import { ViewportService } from 'app/viewport.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activePane: string = 'pane1';

  constructor(public viewportService: ViewportService) {
    this.viewportService.dataChange.subscribe((data) => {
      this.activePane = data.activePane;
    });
  }

  ngOnInit() {
  }

}
