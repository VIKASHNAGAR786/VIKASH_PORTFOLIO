import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BackgroundComponent } from "./components/background/background.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, NavbarComponent, BackgroundComponent, FooterComponent],
  template: `
  <app-background></app-background>
  <header>
    <app-navbar></app-navbar>
  </header>
  <!-- Main Content -->
  <main class="container mt-4 mb-5">
    <router-outlet></router-outlet>
  </main>
  <!-- Footer -->
  <!-- <app-footer></app-footer> -->
`,
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  currentYear: number = new Date().getFullYear();
}
// https://vikashnagar786.github.io/VIKASH_PORTFOLIO/
// ng build --configuration production --base-href /VIKASH_PORTFOLIO/