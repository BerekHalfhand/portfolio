import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raindrop',
  templateUrl: './raindrop.component.html',
  styleUrls: ['./raindrop.component.scss']
})
export class RaindropComponent implements OnInit {
  @Input() dropStyle: string;
  @Input() stemStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
