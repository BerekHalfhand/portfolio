import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportService } from 'app/viewport.service';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import cascadeAnimation from 'helpers/cascadeAnimation';

@Component({
  selector: 'app-projects-pane',
  templateUrl: './projects-pane.component.html',
  styleUrls: ['./projects-pane.component.scss'],
  animations: [
    trigger('textbox', [
      state('initial', style({
        transform: 'translate3d(-40%, 0, 0)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      })),
      transition('initial=>final', animate('300ms 1ms ease-in'))
    ])
  ]
})
export class ProjectsPaneComponent implements OnInit, OnDestroy {
  showContent = false;
  state = 'initial';
  willChange = true;
  private ngUnsubscribe = new Subject();

  projects: object[] = [
    {
      name: 'Tile.Expert Portal',
      stack: 'AngularJS, Symfony2, MongoDB',
      url: 'https://te.remote.team/#/',
      img: 'assets/pics/projects/tile_expert',
      description: 'The internal web-portal for Tile.Expert employees, \
combining many features from a rich forum functionality to the complex task scheduling \
system, as well as cross-site data flow, statistics, notifications and much more.',
      state: 'initial'
    },
    {
      name: 'Ruby on Rails + React',
      stack: 'Ruby on Rails, MongoDB, React, Redux, Bootstrap 4',
      url: 'https://safe-lowlands-72747.herokuapp.com/spreadsheet',
      img: 'assets/pics/projects/ror_react',
      description: 'Test project, a single-page app able to store, dinamically \
add, modify and filter a table of custom data with custom typed columns.',
      state: 'initial'
    },
    {
      name: 'Web Store on NuxtJS',
      stack: 'Vue, NodeJS, Bootstrap 4',
      url: 'http://vue-store.com.s3-website.us-east-2.amazonaws.com/',
      img: 'assets/pics/projects/vue_store',
      description: 'Test project, a single-page app imitating an online store.',
      state: 'initial'
    },
    {
      name: 'Easy4',
      stack: 'React Native, Redux, Expo',
      url: 'https://play.google.com/store/apps/details?id=com.sonet.easy4',
      img: 'assets/pics/projects/easy4',
      description: 'Mobile application for personal account management for Easy4 clients. \
Features biometry authentication and online payments.',
      state: 'initial'
    }
  ];

  constructor(private viewportService: ViewportService) { }

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleShow() {
    this.showContent = true;
    this.state = 'final';
    this.unsubscribe();
    cascadeAnimation(this.projects, 0, 300, 250)
    .then((result) => this.willChange = false )
    .catch((err) => {console.log('oops:' + err); });
  }

  ngOnInit() {
    this.viewportService.dataChange
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      if (data.showContent.pane4 === true) {
        this.toggleShow();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
