import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, FooterComponent]
})
export class SkillsComponent {
  // Main skill categories with icons and progress levels
  skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'bi-code-slash',
      skills: [
        { name: 'C# / .NET', level: 95, color: '#178600' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'Python', level: 80, color: '#3572A5' },
        { name: 'Java', level: 75, color: '#b07219' },
        { name: 'HTML/CSS', level: 95, color: '#e34c26' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'bi-gear-fill',
      skills: [
        { name: 'Angular', level: 90, color: '#dd0031' },
        { name: 'ASP.NET Core', level: 88, color: '#512bd4' },
        { name: 'Entity Framework', level: 85, color: '#512bd4' },
        { name: 'React', level: 70, color: '#61dafb' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Spring Boot', level: 65, color: '#6db33f' }
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: 'bi-database-fill',
      skills: [
        { name: 'MS SQL Server', level: 85, color: '#CC2927' },
        { name: 'MySQL', level: 80, color: '#4479A1' },
        { name: 'MongoDB', level: 70, color: '#47A248' },
        { name: 'Microsoft Azure', level: 75, color: '#0078D4' },
        { name: 'AWS', level: 65, color: '#FF9900' },
        { name: 'Firebase', level: 70, color: '#FFCA28' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'bi-tools',
      skills: [
        { name: 'Git/GitHub', level: 90, color: '#F1502F' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'Azure DevOps', level: 75, color: '#0078D7' },
        { name: 'Postman', level: 85, color: '#FF6C37' },
        { name: 'Visual Studio', level: 95, color: '#5C2D91' },
        { name: 'VS Code', level: 90, color: '#007ACC' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'bi-people-fill',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Adaptability', level: 90 },
        { name: 'Continuous Learning', level: 95 }
      ]
    },
    {
      title: 'Specializations',
      icon: 'bi-stars',
      skills: [
        { name: 'RESTful APIs', level: 88 },
        { name: 'Microservices', level: 75 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Data Visualization', level: 78 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Testing & Debugging', level: 87 }
      ]
    }
  ];

  // Featured technologies for top section
  featuredTech = [
    { name: 'C#', icon: 'csharp', color: '#178600' },
    { name: 'Angular', icon: 'angular', color: '#dd0031' },
    { name: '.NET', icon: 'dotnet', color: '#512bd4' },
    { name: 'SQL', icon: 'database', color: '#CC2927' },
    { name: 'Azure', icon: 'microsoft', color: '#0078D4' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178c6' }
  ];

  // Stats for skills overview
  skillStats = [
    { label: 'Languages', value: '6+', description: 'Programming' },
    { label: 'Frameworks', value: '8+', description: 'Mastered' },
    { label: 'Projects', value: '20+', description: 'Completed' },
    { label: 'Experience', value: '2+', description: 'Years' }
  ];
}