import { Injectable } from '@angular/core';


export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
  username: string;
  displayText: string;
  description?: string;
  isPrimary?: boolean;
}

@Injectable({
  providedIn: 'root' // This makes it available throughout the app
})
export class SocialMediaService {
  
  // All social media links in one place
  private socialLinks: SocialMediaLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/VIKASHNAGAR786',
      icon: 'bi-github',
      color: '#333333',
      username: '@vikashnagar',
      displayText: 'GitHub',
      description: 'Check out my open-source projects and code',
      isPrimary: true
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vikash-nagar-211459204',
      icon: 'bi-linkedin',
      color: '#0077B5',
      username: 'Vikash Nagar',
      displayText: 'LinkedIn',
      description: 'Connect professionally',
      isPrimary: true
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@largecoder?si=3wYyXlSU7o9UvE33',
      icon: 'bi-youtube',
      color: '#FF0000',
      username: '@largecoder',
      displayText: 'YouTube',
      description: 'Tech tutorials and coding content',
      isPrimary: true
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/vikashnagar',
      icon: 'bi-twitter',
      color: '#1DA1F2',
      username: '@vikashnagar',
      displayText: 'Twitter',
      description: 'Tech thoughts and updates'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/maihuvikashh/',
      icon: 'bi-instagram',
      color: '#E4405F',
      username: '@vikashnagar',
      displayText: 'Instagram',
      description: 'Behind the scenes & personal updates'
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/vikash.nagar.507679/',
      icon: 'bi-facebook',
      color: '#1877F2',
      username: 'Vikash Nagar',
      displayText: 'Facebook'
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/vikashnagar872/',
      icon: 'bi-code-slash',
      color: '#FFA116',
      username: 'vikashnagar',
      displayText: 'LeetCode',
      description: 'Coding problem solutions'
    },
    {
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/vikashnagar872',
      icon: 'bi-terminal',
      color: '#2EC866',
      username: 'vikashnagar',
      displayText: 'HackerRank'
    },
    {
      platform: 'Medium',
      url: 'https://medium.com/@vikashnagar',
      icon: 'bi-medium',
      color: '#000000',
      username: '@vikashnagar',
      displayText: 'Medium',
      description: 'Tech blog articles'
    },
    {
      platform: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/your-id',
      icon: 'bi-stack-overflow',
      color: '#F48024',
      username: 'vikashnagar',
      displayText: 'Stack Overflow',
      description: 'Q&A contributions'
    }
  ];

  // Contact information
  private contactInfo = {
    whatsapp: {
      number: '+91 8696169735',
      url: 'https://wa.me/918696169735?text=Hello%20Vikash,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
      message: 'Hello Vikash, I saw your portfolio and would like to connect.'
    },
    email: {
      address: 'vikashnagar872@gmail.com',
      url: 'mailto:vikashnagar872@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Vikash,',
      subject: 'Portfolio Inquiry'
    },
    phone: '+91 8696169735'
  };

  // Get all social links
  getAllSocialLinks(): SocialMediaLink[] {
    return this.socialLinks;
  }

  // Get primary social links (marked as primary)
  getPrimarySocialLinks(): SocialMediaLink[] {
    return this.socialLinks.filter(link => link.isPrimary);
  }

  // Get specific platform link
  getLinkByPlatform(platform: string): SocialMediaLink | undefined {
    return this.socialLinks.find(link => 
      link.platform.toLowerCase() === platform.toLowerCase()
    );
  }

  // Get contact information
  getContactInfo() {
    return this.contactInfo;
  }

  // Get developer platforms (GitHub, LeetCode, etc.)
  getDeveloperPlatforms(): SocialMediaLink[] {
    const devPlatforms = ['GitHub', 'LeetCode', 'HackerRank', 'Stack Overflow'];
    return this.socialLinks.filter(link => 
      devPlatforms.includes(link.platform)
    );
  }

  // Get social platforms (LinkedIn, Twitter, etc.)
  getSocialPlatforms(): SocialMediaLink[] {
    const socialPlatforms = ['LinkedIn', 'Twitter', 'Instagram', 'Facebook', 'YouTube'];
    return this.socialLinks.filter(link => 
      socialPlatforms.includes(link.platform)
    );
  }

  // Open a social link
  openSocialLink(platform: string) {
    const link = this.getLinkByPlatform(platform);
    if (link) {
      window.open(link.url, '_blank');
    }
  }

  // Open WhatsApp
  openWhatsApp() {
    window.open(this.contactInfo.whatsapp.url, '_blank');
  }

  // Open Email
  openEmail() {
    window.open(this.contactInfo.email.url, '_blank');
  }

  // Copy to clipboard
  copyToClipboard(text: string, type: string = 'text'): Promise<void> {
    return navigator.clipboard.writeText(text).then(() => {
      console.log(`${type} copied to clipboard`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  // for downloading pdf
 


}