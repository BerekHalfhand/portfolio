import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects-pane',
  templateUrl: './projects-pane.component.html',
  styleUrls: ['./projects-pane.component.scss'],
  animations: [
    trigger('textbox', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('600ms 1ms ease-in', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ProjectsPaneComponent implements OnInit {
  showContent: boolean;
  projects: object[] = [
    {
      name: 'Tile.Expert Portal',
      stack: 'AngularJS, Symfony2, MongoDB',
      url: 'https://te.remote.team/#/',
      img: 'assets/pics/projects/tile_expert.png',
      description: 'The internal web-portal for Tile.Expert employees, \
combining many features from a rich forum functionality to the complex task scheduling \
system, as well as cross-site data flow, statistics, notifications and much more.'
    },
    {
      name: 'Ruby on Rails + React',
      stack: 'Ruby on Rails, MongoDB, React, Redux, Bootstrap 4',
      url: 'https://safe-lowlands-72747.herokuapp.com/spreadsheet',
      img: 'assets/pics/projects/ror_react.png',
      description: 'Test project, a single-page app able to store, dinamically \
add, modify and filter a table of custom data with custom typed columns.'
    },
    {
      name: 'Web Store on NuxtJS',
      stack: 'Vue, NodeJS, Bootstrap 4',
      url: 'http://vue-store.com.s3-website.us-east-2.amazonaws.com/',
      img: 'assets/pics/projects/vue_store.png',
      description: 'Test project, a single-page app imitating an online store.'
    }
  ];

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((data) => {
      this.showContent = data.showContent['pane4'];
    });
  }

  ngOnInit() {
  }

}
