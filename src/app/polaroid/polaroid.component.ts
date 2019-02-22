import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolaroidComponent implements OnInit {
  @Input() caption: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
