import { Component } from '@angular/core';
export interface Experience {
  from: string;
  to: string;
  title: string;
}
export interface Project {
  name: string;
  website: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  private readonly themeKey = 'theme';
  constructor() {
    this.loadTheme();
  }
  switchTheme() {
    this.toggleTheme();
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('theme-dark');
  }
  toggleTheme(): void {
    const body = document.body;
    if (body.classList.contains('theme-dark')) {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      localStorage.setItem(this.themeKey, 'light');
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      localStorage.setItem(this.themeKey, 'dark');
    }
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    document.body.classList.add(`theme-${savedTheme}`);
  }
  get years() {
    return new Date().getFullYear() - 2019;
  }
  get currentYear(){
    return new Date().getFullYear();
  }

  get experiences(): Experience[] {
    return [
      { from: 'December 2023', to: 'Present', title: 'Software Engineer' },
      { from: 'August 2022', to: 'May 2023', title: 'Part-Time IT Instructor' },
      { from: 'September 2022', to: 'December 2023', title: 'Web Developer' },
      { from: 'November 2021', to: 'September 2022', title: 'Software Developer II' },
      { from: 'August 2020', to: 'November 2021', title: 'Jr Software Developer / Jr. Data Quality Assurance' },
      { from: 'August 2019', to: 'March 2020', title: 'Systems Developer' }
    ];
  }
  get projects(): Project[] {
    return [{
      name: 'Blog',
      website: 'blognikopi.com',
      link: ''
    },{
      name: 'Admin Dashboard',
      website: 'kopidashboard.com',
      link: ''
    },{
      name: 'Capstone Title Generator',
      website: 'kopicapstonetitlegenerator.com',
      link: ''
    },{
      name: 'WeatherDashboard',
      website: 'kopiweatherdashboard.com',
      link: ''
    }];
  }
  logos: string[] = [
    'assets/techstacks/Angular.png',
    'assets/techstacks/Azure Devops.png',
    'assets/techstacks/Azure.png',
    'assets/techstacks/BitBucket.png',
    'assets/techstacks/CSharp.png',
    'assets/techstacks/Bootstrap.png',
    'assets/techstacks/CodeIgniter.png',
    'assets/techstacks/CSS3.png',
    'assets/techstacks/Docker.png',
    'assets/techstacks/GitHub.png',
    'assets/techstacks/HTML5.png',
    'assets/techstacks/JavaScript.png',
    'assets/techstacks/Jira.png',
    'assets/techstacks/Laravel (1).png',
    'assets/techstacks/Linux (1).png',
    'assets/techstacks/Microsoft SQL Server.png',
    'assets/techstacks/MySQL.png',
    'assets/techstacks/NET.png',
    'assets/techstacks/NPM.png',
    'assets/techstacks/PHP.png',
    'assets/techstacks/TypeScript.png',
  ];

  techNames: string[] = [
    'Angular',
    'Azure Devops',
    'Azure',
    'Bitbucket',
    'Azure',
    'Csharp',
    'Bootstrap',
    'CodeIgniter',
    'CSS3',
    'Github',
    'HTML5',
    'Javascript',
    'Jira',
    'Laravel',
    'Linux',
    'Microsoft SQL Server',
    'MySQL',
    '.NET',
    'NPM',
    'PHP',
    'Typescript',

  ];
}
