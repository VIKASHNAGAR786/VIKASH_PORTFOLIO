import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <header>
    <app-navbar></app-navbar>
  </header>
  <!-- Main Content -->
  <main class="container mt-4 mb-5">
    <router-outlet></router-outlet>
  </main>
  <!-- Footer -->
  <footer class="bg-success text-white text-center py-3">
    <div class="container">
      <p class="mb-1">🌱 <strong>Vikash Nagar</strong> - Software Developer</p>
      <p class="mb-0">&copy; {{ currentYear }} vikash. All rights reserved.</p>
    </div>
  </footer>
`,
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  currentYear: number = new Date().getFullYear();
}
// https://vikashnagar786.github.io/VIKASH_PORTFOLIO/
// ng build --configuration production --base-href /VIKASH_PORTFOLIO/