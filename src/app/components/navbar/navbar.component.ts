import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule,CommonModule],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // For toggling the mobile menu
  isMenuOpen = false;

  // Function to toggle mobile menu visibility
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}