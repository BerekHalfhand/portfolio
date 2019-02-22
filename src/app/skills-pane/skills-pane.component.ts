import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'app/scroll.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills-pane',
  templateUrl: './skills-pane.component.html',
  styleUrls: ['./skills-pane.component.scss'],
  animations: [
    trigger('textbox', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
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
export class SkillsPaneComponent implements OnInit {
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
  showContent: boolean;

  constructor(private scrollService: ScrollService) {
    this.scrollService.dataChange.subscribe((data) => {
      this.showContent = data.showContent['pane3'];
    });
  }

  ngOnInit() {
  }

}
