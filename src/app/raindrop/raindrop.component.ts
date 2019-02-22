import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-raindrop',
  templateUrl: './raindrop.component.html',
  styleUrls: ['./raindrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaindropComponent implements OnInit {
  @Input() dropStyle: string;
  @Input() stemStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
