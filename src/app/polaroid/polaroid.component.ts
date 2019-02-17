import { Component, OnInit, Input } from '@angular/core';;

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss']
})
export class PolaroidComponent implements OnInit {
  @Input() caption: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
