import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule],
  styleUrls: ['./navbar.component.css'],
  standalone: true // if you're using standalone components
})
export class NavbarComponent {
  isSidebarOpen = true;
  activePage = 'home';

  sidebarItems = [
    { id: 'home', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-info-circle' },
    { id: 'projects', label: 'Projects', icon: 'bi-folder' },
    { id: 'skills', label: 'Skills', icon: 'bi-lightning' },
    { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-person' },
    { id: 'testimonials', label: 'Testimonials', icon: 'bi-chat-quote' },
    { id: 'blog', label: 'Blog', icon: 'bi-journal-text' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
    { id: 'settings', label: 'Settings', icon: 'bi-gear' }
  ];

  constructor(private router: Router) {
    // Automatically update activePage based on current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.replace('/', '') || 'home';
        this.activePage = url;
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setActivePage(page: string) {
    this.activePage = page;
  }
}
