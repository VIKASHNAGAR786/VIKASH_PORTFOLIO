import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports:[CommonModule]
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C#', 'Python', 'TypeScript']
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', '.NET']
    },
    {
      title: 'Databases',
      skills: ['MS SQL', 'MySQL']
    },
    {
      title: 'APIs & Networking',
      skills: ['REST APIs', 'Networking']
    },
    {
      title: 'System & Platform',
      skills: ['Operating System', 'Application Development']
    },
    {
      title: 'Advanced Domains',
      skills: ['Artificial Intelligence', 'Data Science']
    }
  ];
}
