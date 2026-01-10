import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Rajesh Gupta',
      role: 'Business Owner',
      company: 'Gupta Traders',
      image: 'assets/testimonials/client1.jpg',
      text: 'Vikash developed our FlexiERP system and completely transformed our business operations. The inventory module alone saves us 20+ hours every week. His attention to detail and post-launch support is exceptional.',
      rating: 5,
      project: 'FlexiERP Business Suite',
      date: 'December 2025',
      featured: true
    },
    {
      name: 'Priya Sharma',
      role: 'Store Manager',
      company: 'SuperMart Retail',
      image: 'assets/testimonials/client2.jpg',
      text: 'The POS system Vikash built for our stores is intuitive, reliable, and has significantly improved our checkout process. He delivered the project ahead of schedule and provided excellent training.',
      rating: 5,
      project: 'Retail POS System',
      date: 'October 2025',
      featured: true
    },
    {
      name: 'Dr. Anil Kumar',
      role: 'Principal',
      company: 'City College',
      image: 'assets/testimonials/client3.jpg',
      text: 'The College Management System reduced our administrative workload by 40%. Vikash understood our specific needs and delivered a solution that exceeded our expectations. Highly recommended!',
      rating: 5,
      project: 'College Management System',
      date: 'August 2025',
      featured: false
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'JPR Systems Pvt. Ltd.',
      image: 'assets/testimonials/colleague1.jpg',
      text: 'Working with Vikash was a pleasure. His expertise in .NET and Angular is impressive. He consistently delivered high-quality code and contributed valuable insights during our sprint planning sessions.',
      rating: 5,
      project: 'Enterprise Application',
      date: 'July 2025',
      featured: true
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      company: 'Celebal Technologies',
      image: 'assets/testimonials/colleague2.jpg',
      text: 'Vikash quickly grasped complex data science concepts during his internship. His contributions to our ML pipeline were significant, and he showed exceptional problem-solving skills.',
      rating: 4,
      project: 'AI/ML Internship',
      date: 'June 2024',
      featured: false
    },
    {
      name: 'Amit Verma',
      role: 'YouTube Subscriber',
      company: 'LargeCoder Community',
      image: 'assets/testimonials/student1.jpg',
      text: 'The LargeCoder YouTube channel helped me land my first developer job. Vikash explains complex concepts in simple terms. His Angular tutorials are the best on YouTube!',
      rating: 5,
      project: 'Tech Education',
      date: 'Ongoing',
      featured: true
    },
    {
      name: 'Rohit Mehta',
      role: 'Freelance Client',
      company: 'Mehta Enterprises',
      image: 'assets/testimonials/client4.jpg',
      text: 'We hired Vikash for a custom inventory management solution. His communication was excellent, he delivered exactly what we needed, and the system has been running flawlessly for months.',
      rating: 5,
      project: 'Custom Inventory System',
      date: 'September 2025',
      featured: false
    },
    {
      name: 'Neha Patel',
      role: 'Startup Founder',
      company: 'AgriTech Solutions',
      image: 'assets/testimonials/client5.jpg',
      text: 'Vikash helped us prototype our agricultural marketplace. His technical expertise and understanding of user experience were crucial in securing our first round of funding.',
      rating: 5,
      project: 'AgriMandi Platform',
      date: 'May 2025',
      featured: false
    }
  ];

  // Testimonial categories
  categories = [
    { id: 'all', name: 'All Testimonials', count: this.testimonials.length },
    { id: 'featured', name: 'Featured', count: this.testimonials.filter(t => t.featured).length },
    { id: 'clients', name: 'Client Reviews', count: 5 },
    { id: 'colleagues', name: 'Colleague Feedback', count: 2 },
    { id: 'students', name: 'Student Feedback', count: 1 }
  ];

  activeFilter = 'all';
  hoveredCard: number | null = null;

  // Get filtered testimonials
  getFilteredTestimonials() {
    if (this.activeFilter === 'all') {
      return this.testimonials;
    } else if (this.activeFilter === 'featured') {
      return this.testimonials.filter(t => t.featured);
    } else if (this.activeFilter === 'clients') {
      return this.testimonials.filter(t => t.role.includes('Owner') || t.role.includes('Manager') || t.company.includes('Traders') || t.company.includes('Retail') || t.company.includes('College'));
    } else if (this.activeFilter === 'colleagues') {
      return this.testimonials.filter(t => t.company.includes('Systems') || t.company.includes('Technologies'));
    } else if (this.activeFilter === 'students') {
      return this.testimonials.filter(t => t.company.includes('Community'));
    }
    return this.testimonials;
  }

  // Set active filter
  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  // Generate stars
  generateStars(rating: number): any[] {
    return Array(rating).fill(0);
  }

  openTestimonialModal(testimonial: any) {
    // Logic to open a modal with more testimonials or detailed view
    alert('Open testimonial modal - functionality to be implemented.');
  }
}