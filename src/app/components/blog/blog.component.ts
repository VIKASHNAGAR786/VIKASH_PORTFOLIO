import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: 'Mastering Angular Signals: A Complete Guide',
      excerpt: 'Learn how to use Angular Signals for reactive programming and state management in your applications.',
      content: 'Angular Signals are the future of reactive programming in Angular applications. In this comprehensive guide, we explore...',
      author: 'Vikash Nagar',
      date: 'Mar 15, 2025',
      readTime: '8 min read',
      category: 'Angular',
      tags: ['Angular', 'TypeScript', 'Reactive Programming', 'Frontend'],
      image: 'assets/blog/angular-signals.jpg',
      featured: true,
      views: 1542,
      likes: 89,
      comments: 24
    },
    {
      id: 2,
      title: 'Building Scalable .NET APIs with Clean Architecture',
      excerpt: 'A step-by-step guide to implementing Clean Architecture in .NET Core Web APIs for enterprise applications.',
      content: 'Clean Architecture helps build maintainable and scalable .NET applications. This tutorial walks you through...',
      author: 'Vikash Nagar',
      date: 'Mar 10, 2025',
      readTime: '12 min read',
      category: '.NET',
      tags: ['.NET', 'C#', 'Clean Architecture', 'API Design'],
      image: 'assets/blog/dotnet-clean-arch.jpg',
      featured: true,
      views: 2345,
      likes: 156,
      comments: 42
    },
    {
      id: 3,
      title: 'My Journey from BCA to Full-Stack Developer',
      excerpt: 'How I transitioned from a computer science student to a professional full-stack developer in 2 years.',
      content: 'Starting from learning basics to building enterprise applications, here\'s my complete journey...',
      author: 'Vikash Nagar',
      date: 'Mar 5, 2025',
      readTime: '6 min read',
      category: 'Career',
      tags: ['Career', 'Learning', 'Full Stack', 'Development'],
      image: 'assets/blog/journey.jpg',
      featured: false,
      views: 3210,
      likes: 210,
      comments: 67
    },
    {
      id: 4,
      title: 'Entity Framework Performance Optimization Tips',
      excerpt: '20+ practical tips to improve Entity Framework Core performance in production applications.',
      content: 'Entity Framework is powerful but can be slow if not optimized. Here are proven techniques to speed up your queries...',
      author: 'Vikash Nagar',
      date: 'Feb 28, 2025',
      readTime: '10 min read',
      category: '.NET',
      tags: ['Entity Framework', 'Performance', 'SQL', 'Database'],
      image: 'assets/blog/ef-performance.jpg',
      featured: false,
      views: 1890,
      likes: 98,
      comments: 31
    },
    {
      id: 5,
      title: 'Creating YouTube Content While Working Full-Time',
      excerpt: 'How I manage LargeCoder YouTube channel alongside a full-time development job.',
      content: 'Balancing content creation with a demanding development job requires discipline and strategy. Here\'s my approach...',
      author: 'Vikash Nagar',
      date: 'Feb 22, 2025',
      readTime: '7 min read',
      category: 'Content Creation',
      tags: ['YouTube', 'Content Creation', 'Productivity', 'Tech Education'],
      image: 'assets/blog/youtube-content.jpg',
      featured: false,
      views: 2876,
      likes: 178,
      comments: 89
    },
    {
      id: 6,
      title: 'Building FlexiERP: Lessons Learned from a Real Project',
      excerpt: 'Technical and business insights from developing a complete ERP system for MSME clients.',
      content: 'From requirement gathering to deployment, here are the key lessons from building FlexiERP...',
      author: 'Vikash Nagar',
      date: 'Feb 15, 2025',
      readTime: '15 min read',
      category: 'Project',
      tags: ['ERP', 'Project Management', '.NET', 'Angular', 'Real World'],
      image: 'assets/blog/flexierp.jpg',
      featured: true,
      views: 3567,
      likes: 245,
      comments: 112
    },
    {
      id: 7,
      title: 'TypeScript Pro Tips for Angular Developers',
      excerpt: 'Advanced TypeScript patterns and techniques that every Angular developer should know.',
      content: 'Take your TypeScript skills to the next level with these advanced patterns and best practices...',
      author: 'Vikash Nagar',
      date: 'Feb 10, 2025',
      readTime: '9 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'Angular', 'Best Practices', 'Advanced'],
      image: 'assets/blog/typescript-tips.jpg',
      featured: false,
      views: 1987,
      likes: 134,
      comments: 45
    },
    {
      id: 8,
      title: 'Freelancing as a Developer: Complete Guide for Beginners',
      excerpt: 'How to start, find clients, price projects, and succeed as a freelance developer.',
      content: 'Thinking about freelancing? Here\'s everything I learned from earning ₹70,000+ in freelance projects...',
      author: 'Vikash Nagar',
      date: 'Feb 5, 2025',
      readTime: '11 min read',
      category: 'Freelancing',
      tags: ['Freelancing', 'Business', 'Career', 'Remote Work'],
      image: 'assets/blog/freelancing-guide.jpg',
      featured: true,
      views: 4321,
      likes: 312,
      comments: 156
    }
  ];

  categories = [
    { name: 'All', count: 8, active: true },
    { name: 'Angular', count: 2, active: false },
    { name: '.NET', count: 3, active: false },
    { name: 'Career', count: 2, active: false },
    { name: 'Projects', count: 2, active: false },
    { name: 'Tutorials', count: 5, active: false }
  ];

  popularTags = [
    'Angular', '.NET', 'TypeScript', 'C#', 'Entity Framework', 
    'Clean Architecture', 'Full Stack', 'Career Growth', 
    'YouTube', 'Freelancing', 'Best Practices', 'Performance'
  ];

  popularPosts = this.blogPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  newsletterSubscribed = false;
  activeCategory = 'All';
  searchQuery = '';
  filteredPosts = [...this.blogPosts];

  filterByCategory(category: string) {
    this.activeCategory = category;
    this.categories.forEach(cat => cat.active = cat.name === category);
    
    if (category === 'All') {
      this.filteredPosts = this.blogPosts;
    } else {
      this.filteredPosts = this.blogPosts.filter(post => 
        post.category === category || 
        post.tags.includes(category)
      );
    }
  }

  filterByTag(tag: string) {
    this.filteredPosts = this.blogPosts.filter(post => 
      post.tags.includes(tag)
    );
    this.activeCategory = 'All';
    this.categories.forEach(cat => cat.active = false);
    this.categories[0].active = true;
  }

  searchPosts() {
    if (!this.searchQuery.trim()) {
      this.filterByCategory(this.activeCategory);
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredPosts = this.blogPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.content.toLowerCase().includes(query)
    );
  }

  subscribeNewsletter(email: string) {
    // In real implementation, you would call an API here
    console.log('Subscribing email:', email);
    this.newsletterSubscribed = true;
    
    // Reset after 3 seconds
    setTimeout(() => {
      this.newsletterSubscribed = false;
    }, 3000);
  }

  getFeaturedPosts() {
    return this.blogPosts.filter(post => post.featured);
  }
}