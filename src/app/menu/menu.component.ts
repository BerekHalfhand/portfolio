import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() activePane: string;

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(e, selector): void {
    e.preventDefault()
    const element = document.querySelector(selector);
    if (element)
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
