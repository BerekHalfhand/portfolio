import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skills-pane',
  templateUrl: './skills-pane.component.html',
  styleUrls: ['./skills-pane.component.scss'],
  animations: [
    trigger('textbox', [
      state('initial', style({
        transform: 'translateX(40%)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateX(0%)',
        opacity: 1
      })),
      transition('initial=>final', animate('300ms 1ms ease-in'))
    ])
  ]
})
export class SkillsPaneComponent implements OnInit, OnDestroy {
  skillset: object[] = [
    {name: 'JavaScript', proficiency: 75},
    {name: 'Angular', proficiency: 60},
    {name: 'React', proficiency: 50},
    {name: 'Vue', proficiency: 25},
    {name: 'Typescript', proficiency: 40},
    {name: 'NodeJS', proficiency: 25},
    {name: 'PHP', proficiency: 70},
    {name: 'Rails', proficiency: 35},
    {name: 'MongoDB', proficiency: 60},
    {name: 'MySQL', proficiency: 45},
    {name: 'Unit Testing', proficiency: 35}
  ];
  showContent = false;
  state = 'initial';
  private ngUnsubscribe = new Subject();

  constructor(private scrollService: ScrollService) { }

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleShow() {
    this.showContent = true;
    this.state = 'final';
    this.unsubscribe();
  }

  ngOnInit() {
    this.scrollService.dataChange
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
