import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportService } from 'app/viewport.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import cascadeAnimation from 'helpers/cascadeAnimation';

@Component({
  selector: 'app-skills-pane',
  templateUrl: './skills-pane.component.html',
  styleUrls: ['./skills-pane.component.scss'],
  animations: [
    trigger('textbox', [
      state('initial', style({
        transform: 'translate3d(40%, 0, 0)',
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
export class SkillsPaneComponent implements OnInit, OnDestroy {
  skillset: object[] = [
    {name: 'JavaScript', proficiency: 75, state: 'initial'},
    {name: 'Angular', proficiency: 60, state: 'initial'},
    {name: 'React Native', proficiency: 75, state: 'initial'},
    {name: 'Vue', proficiency: 60, state: 'initial'},
    {name: 'Typescript', proficiency: 40, state: 'initial'},
    {name: 'NodeJS', proficiency: 60, state: 'initial'},
    {name: 'PHP', proficiency: 70, state: 'initial'},
    {name: 'Rails', proficiency: 65, state: 'initial'},
    {name: 'MongoDB', proficiency: 60, state: 'initial'},
    {name: 'MySQL', proficiency: 45, state: 'initial'},
    {name: 'Unit Testing', proficiency: 55, state: 'initial'}
  ];
  showContent = false;
  state = 'initial';
  willChange = true;
  private ngUnsubscribe = new Subject();

  constructor(private viewportService: ViewportService) { }

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleShow() {
    this.showContent = true;
    this.state = 'final';
    this.unsubscribe();

    cascadeAnimation(this.skillset, 0, 150, 150)
    .then((result) => this.willChange = false )
    .catch((err) => {console.log('oops:' + err); });
  }

  ngOnInit() {
    this.viewportService.dataChange
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      if (data.showContent.pane3 === true) {
        this.toggleShow();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
