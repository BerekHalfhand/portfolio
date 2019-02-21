import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-pane',
  templateUrl: './skills-pane.component.html',
  styleUrls: ['./skills-pane.component.scss']
})
export class SkillsPaneComponent implements OnInit {
  skillset: object[] = [
    {name: "JavaScript", proficiency: 75},
    {name: "Angular", proficiency: 60},
    {name: "React", proficiency: 50},
    {name: "Vue", proficiency: 25},
    {name: "Typescript", proficiency: 40},
    {name: "NodeJS", proficiency: 25},
    {name: "PHP", proficiency: 70},
    {name: "Rails", proficiency: 35},
    {name: "MongoDB", proficiency: 60},
    {name: "MySQL", proficiency: 45},
    {name: "Unit Testing", proficiency: 35}
  ];

  constructor() { }

  ngOnInit() {
  }

}
