import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  // Navigation links
  navLinks = [
    { name: 'Home', path: '/', icon: 'bi-house' },
    { name: 'About', path: '/about', icon: 'bi-person' },
    { name: 'Projects', path: '/projects', icon: 'bi-code-slash' },
    { name: 'Skills', path: '/skills', icon: 'bi-tools' },
    { name: 'Blog', path: '/blog', icon: 'bi-pencil' },
    { name: 'Testimonials', path: '/testimonials', icon: 'bi-chat' },
    { name: 'Contact', path: '/contact', icon: 'bi-envelope' }
  ];

  // Social media links
  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vikashnagar', icon: 'bi-linkedin', color: '#0077B5' },
    { name: 'GitHub', url: 'https://github.com/vikashnagar', icon: 'bi-github', color: '#333333' },
    { name: 'YouTube', url: 'https://youtube.com/largecoder', icon: 'bi-youtube', color: '#FF0000' },
    { name: 'Twitter', url: 'https://twitter.com/vikashnagar', icon: 'bi-twitter', color: '#1DA1F2' },
    { name: 'Instagram', url: 'https://instagram.com/vikashnagar', icon: 'bi-instagram', color: '#E4405F' }
  ];

  // Quick links
  quickLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  // Newsletter subscription
  subscribeNewsletter(email: string) {
    console.log('Newsletter subscription:', email);
    // In real implementation, you would call an API here
    alert('Thank you for subscribing! You\'ll receive updates soon.');
  }
  /* Scroll to Top Function */
scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}