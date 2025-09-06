import { Component } from '@angular/core';
export interface Experience {
  from: string;
  to: string;
  title: string;
}
export interface Project {
  name: string;
  uiRepo: string;
  apiRepo: string;
  link?: string;
  description: string;
  image: string;
  tags: string[];
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
      name: 'KopiBudget - Personal Finance Tracker App',
      uiRepo: 'https://github.com/CodeCoffee2024/KopiBudget',
      apiRepo: 'https://github.com/CodeCoffee2024/KopiBudget',
      link: 'https://kopi-budget-six.vercel.app/login',
      description: 'A personal finance tracker built with Angular and ASP.NET Core to manage accounts, track expenses, and visualize financial data.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap 5', '.NET', 'EF Core', 'SQL', 'Docker', 'Github', 'Cercel']
    },{
      name: 'Blog',
      uiRepo: 'https://github.com/CodeCoffee2024/BlogUI',
      apiRepo: 'https://github.com/CodeCoffee2024/BlogApi',
      description: 'A personal blog platform with Angular frontend and ASP.NET Core API for managing posts and user with RBAC modules.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap 5', '.NET', 'EF Core', 'SQL']
    },{
      name: 'E-Commerce',
      uiRepo: 'https://github.com/CodeCoffee2024/e-commerce-frontend',
      apiRepo: 'https://github.com/CodeCoffee2024/e-commerce-backend',
      description: 'Full-stack e-commerce system with RBAC, reporting, basic settings for an e-commerce admin dashboard and client side UI.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap 4', '.NET', 'EF Core', 'SQL']
    },{
      name: 'Admin Dashboard',
      uiRepo: 'https://github.com/CodeCoffee2024/admin-dashboard-v2',
      apiRepo: '',
      description: 'Responsive admin dashboard with analytics, charts, and management tools built using Angular.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap 4']

    },{
      name: 'Capstone Title Generator',
      uiRepo: 'https://github.com/CodeCoffee2024/BlogUI',
      apiRepo: 'https://github.com/CodeCoffee2024/BlogApi',
      description: 'A tool for IT/CS students that generates creative and relevant capstone project title suggestions.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap', 'Responsive UI']
    },{
      name: 'Weather Dashboard',
      uiRepo: 'https://github.com/CodeCoffee2024/weather-dashboard',
      apiRepo: '',
      description: 'Real-time weather dashboard fetching API data and displaying forecasts with interactive UI charts.',
      image: '',
      tags: ['Angular', 'Chart.js', 'Bootstrap', 'Responsive UI']
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
  downloadResume() {
    const pwd = prompt("Enter password to unlock resume:");


    if (pwd) {
      this.decryptResume(pwd).catch(() => alert("Wrong password"));
    }

  }
  async decryptResume(password: string) {
    const res = await fetch('assets/resume.enc');
  if (!res.ok) throw new Error('Encrypted file not found');
  const bytes = new Uint8Array(await res.arrayBuffer());

  // Parse [salt|iv|tag|ciphertext]
  const SALT_LEN = 16;
  const IV_LEN = 12;
  const TAG_LEN = 16;

  const salt = bytes.slice(0, SALT_LEN);
  const iv = bytes.slice(SALT_LEN, SALT_LEN + IV_LEN);
  const tag = bytes.slice(SALT_LEN + IV_LEN, SALT_LEN + IV_LEN + TAG_LEN);
  const ciphertext = bytes.slice(SALT_LEN + IV_LEN + TAG_LEN);

  // Derive key with PBKDF2 (params must match Node)
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );

  // WebCrypto expects ciphertext||tag
  const ctPlusTag = new Uint8Array(ciphertext.length + tag.length);
  ctPlusTag.set(ciphertext, 0);
  ctPlusTag.set(tag, ciphertext.length);

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv, tagLength: 128 },
    key,
    ctPlusTag
  );

  // Trigger download
  const blob = new Blob([decrypted], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.pdf';
  a.click();
  URL.revokeObjectURL(url);
  }

}
