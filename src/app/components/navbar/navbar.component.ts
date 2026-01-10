import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule],
  styleUrls: ['./navbar.component.css'],
  standalone: true
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private socialMediaService: SocialMediaService
  ) {
    this.checkMobile();
    this.updateTime();
    
    // Update active page based on route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.replace('/', '') || 'home';
        this.activePage = url;
      }
    });

    this.socialLinks = this.socialMediaService.getPrimarySocialLinks();
    this.contactInfo = this.socialMediaService.getContactInfo();
  }
  contactInfo: any;
  isSidebarOpen = true;
  activePage = 'home';
  isMobile = false;
  isHovering = false;
  currentTime = new Date();
  showThemeOptions = false;
  currentTheme = 'dark';
  showProfileMenu = false;

  // Profile info
  profile = {
    name: 'Vikash Nagar',
    title: 'Full Stack Developer',
    avatar: 'assets/profile.png',
    status: 'online'
  };

  // Enhanced sidebar items with categories
  sidebarItems = [
    { 
      category: 'MAIN',
      items: [
        { id: 'home', label: 'Home', icon: 'bi-house', description: 'Welcome page' }
      ]
    },
    {
      category: 'PERSONAL',
      items: [
        { id: 'about', label: 'About', icon: 'bi-person', description: 'About me' },
        { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text', description: 'Experience & skills' }
      ]
    },
    {
      category: 'PORTFOLIO',
      items: [
        { id: 'projects', label: 'Projects', icon: 'bi-code-slash', description: 'My work' },
        { id: 'skills', label: 'Skills', icon: 'bi-lightning-charge', description: 'Tech expertise' },
        { id: 'testimonials', label: 'Testimonials', icon: 'bi-chat-quote', description: 'Client feedback' }
      ]
    },
    {
      category: 'CONTENT',
      items: [
        { id: 'blog', label: 'Blog', icon: 'bi-journal-text', description: 'Tech articles' },
        { id: 'contact', label: 'Contact', icon: 'bi-envelope', description: 'Get in touch' }
      ]
    }
  ];

  // Social links
  socialLinks = [
    { platform: 'LinkedIn', icon: 'bi-linkedin', color: '#0077B5', url: 'https://linkedin.com' },
    { platform: 'GitHub', icon: 'bi-github', color: '#333333', url: 'https://github.com' },
    { platform: 'YouTube', icon: 'bi-youtube', color: '#FF0000', url: 'https://youtube.com' },
    { platform: 'Twitter', icon: 'bi-twitter', color: '#1DA1F2', url: 'https://twitter.com' }
  ];

  // Themes
  themes = [
    { id: 'dark', name: 'Dark', icon: 'bi-moon', color: '#1a1a2e' },
    { id: 'light', name: 'Light', icon: 'bi-sun', color: '#f8f9fa' },
    { id: 'blue', name: 'Ocean', icon: 'bi-water', color: '#0a3d62' },
    { id: 'purple', name: 'Purple', icon: 'bi-droplet', color: '#6c5ce7' }
  ];

  

  ngOnInit() {
    this.checkMobile();
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.switchTheme(savedTheme);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen && this.isMobile) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }

  setActivePage(page: string) {
    this.activePage = page;
    if (this.isMobile) {
      this.toggleSidebar();
    }
  }

  updateTime() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  formatTime(): string {
    return this.currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    // In a real app, you would apply the theme to the entire app
    console.log('Switching to theme:', theme);
  }

  toggleThemeOptions() {
    this.showThemeOptions = !this.showThemeOptions;
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  onSidebarMouseEnter() {
    if (!this.isMobile) {
      this.isHovering = true;
      if (!this.isSidebarOpen) {
        setTimeout(() => {
          if (this.isHovering) {
            this.isSidebarOpen = true;
          }
        }, 300);
      }
    }
  }

  onSidebarMouseLeave() {
    if (!this.isMobile) {
      this.isHovering = false;
    }
  }

  // Quick actions
  quickActions = [
    { label: 'Download CV', icon: 'bi-download', action: () => this.downloadCV() },
    { label: 'Email Me', icon: 'bi-envelope', action: () => this.openEmail() },
    { label: 'WhatsApp', icon: 'bi-whatsapp', action: () => this.openWhatsApp() }
  ];

  downloadCV() {
    // Implement CV download
    console.log('Downloading CV...');
  }

   openWhatsApp() {
    this.socialMediaService.openWhatsApp();
  }

  openEmail() {
    this.socialMediaService.openEmail();
  }
}