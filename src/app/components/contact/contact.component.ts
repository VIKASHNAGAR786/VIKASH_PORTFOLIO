import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private socialMediaService: SocialMediaService) {
     this.socialLinks = this.socialMediaService.getPrimarySocialLinks();
    this.contactInfo = this.socialMediaService.getContactInfo();
  }
  contactInfo: any;

  // Social Media Links
  socialLinks = [
    {
      platform: 'LinkedIn',
      icon: 'bi-linkedin',
      url: 'https://linkedin.com/in/vikash-nagar',
      color: '#0077B5'
    },
    {
      platform: 'GitHub',
      icon: 'bi-github',
      url: 'https://github.com/vikashnagar',
      color: '#333'
    },
    {
      platform: 'YouTube',
      icon: 'bi-youtube',
      url: 'https://youtube.com/largecoder',
      color: '#FF0000'
    },
    {
      platform: 'Twitter',
      icon: 'bi-twitter',
      url: 'https://twitter.com/vikashnagar',
      color: '#1DA1F2'
    },
    {
      platform: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://instagram.com/vikashnagar',
      color: '#E4405F'
    }
  ];

  // Contact Form
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    loading: false,
    submitted: false,
    error: ''
  };

  // Available for
  availability = [
    'Freelance Projects',
    'Full-time Opportunities',
    'Technical Consultations',
    'Mentoring Sessions',
    'Open Source Contributions'
  ];

  // Response Time
  responseTimes = [
    { type: 'WhatsApp', time: 'Within 1 hour', icon: 'bi-whatsapp', color: '#25D366' },
    { type: 'Email', time: 'Within 24 hours', icon: 'bi-envelope', color: '#EA4335' },
    { type: 'Social Media', time: 'Within 12 hours', icon: 'bi-chat', color: '#4267B2' }
  ];

  // Copy to clipboard functionality
  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      alert(`${type} copied to clipboard!`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  // Open WhatsApp
 openWhatsApp() {
    this.socialMediaService.openWhatsApp();
  }

  openEmail() {
    this.socialMediaService.openEmail();
  }
  // Submit contact form
  submitForm() {
    if (!this.validateForm()) {
      return;
    }

    this.contactForm.loading = true;
    this.contactForm.error = '';

    // Simulate API call
    setTimeout(() => {
      this.contactForm.loading = false;
      this.contactForm.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: '',
          loading: false,
          submitted: false,
          error: ''
        };
      }, 3000);
    }, 1500);
  }

  // Validate form
  validateForm(): boolean {
    if (!this.contactForm.name.trim()) {
      this.contactForm.error = 'Please enter your name';
      return false;
    }
    
    if (!this.contactForm.email.trim()) {
      this.contactForm.error = 'Please enter your email';
      return false;
    }
    
    if (!this.isValidEmail(this.contactForm.email)) {
      this.contactForm.error = 'Please enter a valid email address';
      return false;
    }
    
    if (!this.contactForm.message.trim()) {
      this.contactForm.error = 'Please enter your message';
      return false;
    }
    
    return true;
  }

  // Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Open social link
  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}