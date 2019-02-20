import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() img: string;
  @Input() url: string;
  @Input() name: string;
  @Input() stack: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
